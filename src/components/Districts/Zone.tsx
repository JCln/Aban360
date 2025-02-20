import { DatailGridComponent, useColumnVisibilityModel } from "../../components/Common/DataGridComponent";
import { provinceColumns, TITLE, zoneColumns } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import { captchaLang, captchaLangPost, captchaMode } from "../../api/Captcha";
import { useQuery } from "react-query";
import { createCountry, createZone, deleteCordinalDirection, deleteCountry, deleteProvince, deleteZone, fetchCordinalDirection, fetchCountry, fetchProvince, fetchZone, updateCordinalDirection, updateCountry, updateProvince, updateZone } from "../../api/Districts";
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { useRegion } from "./Region";
export const useZone = () => useQuery("zone", fetchZone);

const Zone = () => {
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState([])
    const { pageSize, handlePageSizeChange } = usePaginationState(5);
    const [page, setPage] = useState(1);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [selectId, setSelectId] = useState(0)
    const defaultVisibilityModel = {
        id: false,
        regionId: false
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    const { data, error, isLoading } = useRegion()
    const _region = Array.isArray(data?.data)
        ? data?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title,
        }))
        : [];


    useEffect(() => {
        setLoading(true)
        fetchZone().then(res => {
            if (res.data) {
                console.log(res)
                setLoading(false)
                setRows(res.data)
            }
        }).catch(error =>
            console.log(error)
        )
    }, [])
    if (isLoading) return <div>...loading region</div>;

    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'id', class: "col-span-12 xl:col-span-4", label: 'کد', type: 'input' },
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'unstandardCode', class: "col-span-12 xl:col-span-4", label: 'unstandardCode', type: 'input' },
                    { name: 'regionId', class: "col-span-12 xl:col-span-4", label: 'منطقه', type: 'select', options: _region ?? [] },
                ]}
                title={" ایجاد ناحیه "}
                apiFunction={createZone}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateZone}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteZone} id={selectId} />
            )}
            <DatailGridComponent
                key={"modulePermission"}
                columns={[
                    ...zoneColumns,
                    {
                        field: "edit",
                        headerName: "",
                        width: 100,
                        align: "center",
                        headerAlign: "center",
                        renderCell: (cellValues: any) => {
                            const onClick = (e: any) => {
                                setOpen(true)
                                setFormData([
                                    { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
                                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                    { name: 'unstandardCode', class: "col-span-12 xl:col-span-4", label: 'unstandardCode', type: 'input', value: `${cellValues?.row?.unstandardCode}` },
                                    { name: 'regionId', class: "col-span-12 xl:col-span-4", label: 'منطقه', type: 'select', options: _region ?? [], defaultValue: _region?.find(v => v?.id === cellValues?.row?.regionId) },

                                ])
                            }
                            return (
                                <div className="max-auto w-full cursor-pointer text-center"
                                    onClick={onClick}
                                >
                                    <img src={icons?.editIcon} alt="" />

                                </div>
                            );
                        },
                    },
                    {
                        field: "delete",
                        headerName: "",
                        width: 50,
                        align: "center",
                        headerAlign: "center",
                        renderCell: (cellValues: any) => {
                            const onClick = (e: any) => {
                                setDeleteDialog(true)
                                setSelectId(cellValues?.id)
                            };
                            return (
                                <div className="max-auto cursor-pointer w-100 text-center"
                                    onClick={onClick}
                                >
                                    <img src={icons?.trashIcon} alt="" />
                                </div>

                            );
                        },
                    },
                ]}
                rows={rows ?? []}
                totalRows={rows?.length}
                height={417}
                pageSize={pageSize}
                pagination={[5, 10, 15]}
                checkboxSelection={false}
                columnVisibilityModel={columnVisibilityModel}
                handlePageSizeChange={handlePageSizeChange}
                handlePageChange={handlePageChange}
                handleColumnVisibilityModelChange={handleColumnVisibilityChange}
            />
        </div>)
}

export default Zone
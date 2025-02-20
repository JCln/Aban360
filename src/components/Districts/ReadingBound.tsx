import { DatailGridComponent, useColumnVisibilityModel } from "../../components/Common/DataGridComponent";
import { ID, modulePermissions, provinceColumns, readingBoundColumns, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import { captchaLang, captchaLangPost, captchaMode } from "../../api/Captcha";
import { createReadingBound, deleteCordinalDirection, deleteCountry, deleteProvince, deleteReadingBound, fetchCordinalDirection, fetchCountry, fetchProvince, fetchReadingBound, fetchZone, updateCordinalDirection, updateCountry, updateProvince, updateReadingBound } from "../../api/Districts";
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { useCountry } from "./Country";
import { useCordinalDirection } from "./CordinalDirection";
import { useQuery } from "react-query";
import { useZone } from "./Zone";
export const useReadingBound = () => useQuery("readingBound", fetchReadingBound);

const ReadingBound = () => {
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
        zoneId: false
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    const { data, error, isLoading } = useZone()
    const _zone = Array.isArray(data?.data)
        ? data?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title,
        }))
        : [];

    useEffect(() => {
        setLoading(true)
        fetchReadingBound().then(res => {
            if (res.data) {
                console.log(res)
                setLoading(false)
                setRows(res.data)
            }
        }).catch(error =>
            console.log(error)
        )
    }, [])
    if (isLoading) return <div>...loading zone</div>;

    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'zoneId', class: "col-span-12 xl:col-span-4", label: 'ناحیه', type: 'select', options: _zone ?? [] },
                    { name: 'fromReadingNumber', class: "col-span-12 xl:col-span-4", label: 'fromReadingNumber', type: 'input' },
                    { name: 'toReadingNumber', class: "col-span-12 xl:col-span-4", label: 'toReadingNumber', type: 'input' },
                ]}
                title={" ایجاد محدوده اشتراکی "}
                apiFunction={createReadingBound}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateReadingBound}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteReadingBound} id={selectId} />
            )}
            <DatailGridComponent
                key={"modulePermission"}
                columns={[
                    ...readingBoundColumns,
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
                                    { name: 'zoneId', class: "col-span-12 xl:col-span-4", label: 'ناحیه', type: 'select', options: _zone ?? [], defaultValue: _zone.find(v => v?.id === cellValues?.row?.zoneId) },
                                    { name: 'fromReadingNumber', class: "col-span-12 xl:col-span-4", label: 'fromReadingNumber', type: 'input',  value: `${cellValues?.row?.fromReadingNumber}`},
                                    { name: 'toReadingNumber', class: "col-span-12 xl:col-span-4", label: 'toReadingNumber', type: 'input',  value: `${cellValues?.row?.toReadingNumber}`},
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

export default ReadingBound
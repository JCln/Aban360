import { DatailGridComponent, useColumnVisibilityModel } from "../../components/Common/DataGridComponent";
import { ID, modulePermissions, provinceColumns, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { createModule, deleteModule } from "../../api/AccessTree/module";
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import { captchaLang, captchaLangPost, captchaMode } from "../../api/Captcha";
import { useQuery } from "react-query";
import { createCountry, createProvince, deleteCordinalDirection, deleteCountry, deleteProvince, fetchCordinalDirection, fetchCountry, fetchProvince, updateCordinalDirection, updateCountry, updateProvince } from "../../api/Districts";
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { useCountry } from "./Country";
import { useCordinalDirection } from "./CordinalDirection";
export const useProvince = () => useQuery("province", fetchProvince);

const Province = () => {
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
        cordinalDirectionId: false,
        countryId: false
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    const { data: countries, error, isLoading } = useCountry()
    const { data: cordinalDirection, error: errorcordinalDirection, isLoading: isLoadingcordinalDirection } = useCordinalDirection()
    const _countries = Array.isArray(countries?.data)
        ? countries?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title,
        }))
        : [];
    const _cordinalDirection = Array.isArray(cordinalDirection?.data)
        ? cordinalDirection?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title
        }))
        : [];


    useEffect(() => {
        setLoading(true)
        fetchProvince().then(res => {
            if (res.data) {
                console.log(res)
                setLoading(false)
                setRows(res.data)
            }
        }).catch(error =>
            console.log(error)
        )
    }, [])
    if (isLoading) return <div>...loading country</div>;
    if (isLoadingcordinalDirection) return <div>...loading CordinalDirection </div>;

    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'id', class: "col-span-12 xl:col-span-4", label: 'کد', type: 'input' },
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'countryId', class: "col-span-12 xl:col-span-4", label: 'کشور', type: 'select', options: _countries ?? [] },
                    { name: 'cordinalDirectionId', class: "col-span-12 xl:col-span-4", label: 'جهت', type: 'select', options: _cordinalDirection ?? [] },
                ]}
                title={" ایجاد استان "}
                apiFunction={createProvince}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateProvince}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteProvince} id={selectId} />
            )}
            <DatailGridComponent
                key={"modulePermission"}
                columns={[
                    ...provinceColumns,
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
                                    { name: 'countryId', class: "col-span-12 xl:col-span-4", label: 'کشور', type: 'select', options: _countries ?? [] },
                                    { name: 'cordinalDirectionId', class: "col-span-12 xl:col-span-4", label: 'جهت', type: 'select', options: _cordinalDirection ?? [] },
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

export default Province
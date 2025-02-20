import { DatailGridComponent, useColumnVisibilityModel } from "../../components/Common/DataGridComponent";
import { ID, regionColumns, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import { useQuery } from "react-query";
import { createRegion, createZone, deleteRegion, fetchRegion, updateRegion } from "../../api/Districts";
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { useHeadquarters } from "./Headquarters";
export const useRegion = () => useQuery("region", fetchRegion);

const Region = () => {
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
        headquartersId: false
    }
    const { data, error, isLoading } = useHeadquarters()

    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    useEffect(() => {
        setLoading(true)
        fetchRegion().then(res => {
            if (res.data) {
                console.log(res)
                setLoading(false)
                setRows(res.data)
            }
        }).catch(error =>
            console.log(error)
        )

    }, [])
    const _headquarters = Array.isArray(data?.data)
        ? data?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title
        }))
        : [];
    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'id', class: "col-span-12 xl:col-span-4", label: 'کد', type: 'input' },
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: _headquarters ?? [] },

                ]}
                title={" ایجاد منطقه "}
                apiFunction={createRegion}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateRegion}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteRegion} id={selectId} />
            )}
            <DatailGridComponent
                key={"modulePermission"}
                columns={[
                    ...regionColumns,
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
                                    { name: 'title', class: "col-span-12 xl:col-span-6", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                    { name: 'headquartersId', class: "col-span-12 xl:col-span-6", label: 'نام شرکت', type: 'select', options: _headquarters ?? [], defaultValue: _headquarters?.find(v => v.id === cellValues?.row?.headquartersId) },
                                ])
                            }
                            return (
                                <div className="max-auto w-full text-center"
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

export default Region
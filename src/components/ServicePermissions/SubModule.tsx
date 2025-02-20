import { DatailGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import {  submodulePermissions } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { createSubModule, deleteSubModule, fetchSubModule, updateSubModule } from '../../api/AccessTree/submodule/index';
import { useModule } from "./Module";
import { useQuery } from "react-query";
export const useSubModule = () => useQuery("module", fetchSubModule);

const SubModule = () => {
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
        moduleId: false
    }

    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    const { data, error, isLoading } = useModule()
    const _module = Array.isArray(data?.data)
        ? data?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title,
        }))
        : [];

    useEffect(() => {
        setLoading(true)
        fetchSubModule().then(res => {
            if (res?.data) {
                setRows(res.data)
                setLoading(false)
            }
        }).catch(error => {
            setLoading(false)
            console.log(error)
        })
    }, [])
    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'style', class: "col-span-12 xl:col-span-4", label: 'استایل', type: 'input' },
                    { name: 'moduleId', class: "col-span-12 xl:col-span-4", label: 'ماژول', type: 'select', options: _module ?? [] },
                    { name: 'clientRoute', class: "col-span-12 xl:col-span-4", label: 'مسیر', type: 'input' },
                    { name: 'logicalOrder', class: "col-span-12 xl:col-span-8", label: 'ترتیب', type: 'input' },
                    { name: 'inMenu', class: "col-span-12 xl:col-span-4", label: 'منو', type: 'checkbox', options: [{ value: true , label: 'منو'}] },
                    { name: 'isActive', class: "col-span-12 xl:col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: 'فعال' }] },
                ]}
                title={" Module ایجاد"}
                apiFunction={createSubModule}
            />

            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateSubModule}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteSubModule} id={selectId} />
            )}
            <DatailGridComponent
                key={"modulePermission"}
                // handlePageSizeChange={handlePageSizeChange}
                columns={[
                    ...submodulePermissions,
                    {
                        field: "edit",
                        headerName: "",
                        width: 100,
                        align: "center",
                        headerAlign: "center",
                        renderCell: (cellValues: any) => {
                            const onClick = (e: any) => {
                                console.log(cellValues?.row?.style)
                                setOpen(true)
                                setFormData([
                                    { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
                                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                    { name: 'style', class: "col-span-12 xl:col-span-4", label: 'استایل', type: 'input',  value: cellValues?.row?.style},
                                    { name: 'moduleId', class: "col-span-12 xl:col-span-4", label: 'ماژول', type: 'select', options: _module ?? [], defaultValue: _module?.find(v => v?.id === cellValues?.row?.moduleId) },
                                    { name: 'clientRoute', class: "col-span-12 xl:col-span-4", label: 'مسیر', type: 'input', value: cellValues?.row?.clientRoute },
                                    { name: 'logicalOrder', class: "col-span-12 xl:col-span-8", label: 'ترتیب', type: 'input',  },
                                    { name: 'inMenu', class: "col-span-12 xl:col-span-4", label: 'منو', type: 'checkbox', options: [{ value: true }] },
                                    { name: 'isActive', class: "col-span-12 xl:col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true }] },
                                ])
                            };
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
                                <div className="max-auto w-100 text-center"
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

export default SubModule
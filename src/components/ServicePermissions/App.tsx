import { DatailGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import { ID, ISACTIVE, ISMENU, LOGICORDER, modulePermissions, STYLE, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { fetchAllModule } from '../../api/AccessTree/module/index';
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { createApp, deleteApp, fetchAllApp, updateApp } from '../../api/AccessTree/app/index';

const App = () => {
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
    }

    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };

    useEffect(() => {
        setLoading(true)
        fetchAllApp().then(res => {
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
                    { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'style', class: "col-span-4", label: 'استایل', type: 'input' },
                    { name: 'logicalOrder', class: "col-span-4", label: 'ترتیب', type: 'input' },
                    { name: 'inMenu', class: "col-span-4", label: 'منو', type: 'checkbox', options: [{ value: true, label: "منو" }] },
                    { name: 'isActive', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
                ]}

                title={" App ایجاد"}
                apiFunction={createApp}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateApp}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteApp} id={selectId} />
            )}
            <DatailGridComponent
                key={pageSize}
                // handlePageSizeChange={handlePageSizeChange}
                columns={[
                    ...[ID(10), TITLE(400), STYLE(200), ISMENU(70), LOGICORDER(150), ISACTIVE(110)],
                    {
                        field: "edit",
                        headerName: "",
                        width: 100,
                        align: "center",
                        headerAlign: "center",
                        renderCell: (cellValues: any) => {
                            const onClick = (e: any) => {
                                setOpen(true)
                                setFormData([{ name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
                                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                { name: 'style', class: "col-span-4", label: 'استایل', type: 'input', value: `${cellValues?.row?.style}` },
                                { name: 'logicalOrder', class: "col-span-4", label: 'ترتیب', type: 'input', value: `${cellValues?.row?.logicalOrder}` },
                                { name: 'inMenu', class: "col-span-4", label: 'منو', type: 'checkbox', options: [{ value: cellValues?.row?.isMenu, label:"منو" }] },
                                { name: 'isActive', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: cellValues?.row?.isActive,  label: 'فعال'}] },])
                            };
                            return (
                                <div className="max-auto w-100 text-center"
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

        </div>
    )
}

export default App
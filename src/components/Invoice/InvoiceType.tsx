import { DataGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import { DESCRIPTION, ID, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { createInvoiceType, deleteInvoiceType, fetchInvoiceType, updateInvoiceType } from "../../api/Invoice";

const InvoiceType = () => {
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
        fetchInvoiceType().then(res => {
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
                    { name: 'id', class: "col-span-12 md:col-span-6 xl:col-span-4", label: 'کد', type: 'input' },
                    { name: 'title', class: "col-span-12   md:col-span-6 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea' },
                ]}
                title={"ایجادنوع صورتحساب"}
                apiFunction={createInvoiceType}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateInvoiceType}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteInvoiceType} id={selectId} />
            )}
            <DataGridComponent
                key={pageSize}
                columns={[
                    ...[ID(10), TITLE(400),
                    DESCRIPTION(400)
                    ],
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
                                { name: 'title', class: "col-span-12 md:col-span-6 xl:col-span-6", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                { name: 'description', class: "col-span-12", label: 'توضیحات', type: 'textarea', defaultValue: `${cellValues?.row?.description}` },
                                ])
                            };
                            return (
                                <div className="max-auto  cursor-pointer w-100 text-center"
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

        </div>
    )
}

export default InvoiceType
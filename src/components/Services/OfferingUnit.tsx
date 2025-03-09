import { DataGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import { ID, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { createOfferingUnit, deleteOfferingUnit, fetchOfferingUnit, updateOfferingUnit } from "../../api/Services";
import { useQuery } from "react-query";
export const useOfferingUnit = () => useQuery("OfferingUnit", fetchOfferingUnit);

const OfferingUnit = () => {
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
        fetchOfferingUnit().then(res => {
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
                    { name: 'title', class: "col-span-12   md:col-span-6 xl:col-span-6", label: 'عنوان', type: 'input' },
                    { name: 'symbol', class: "col-span-12   md:col-span-6 xl:col-span-6", label: 'الگو', type: 'input' },
                ]}
                title={"ایجاد واحد اقلام"}
                apiFunction={createOfferingUnit}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateOfferingUnit}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteOfferingUnit} id={selectId} />
            )}
            <DataGridComponent
                key={pageSize}
                columns={[
                    ...[ID(10), TITLE(400),
                    { field: 'symbol', headerName: 'الگو', width: 100, align: "center", headerAlign: "center", sortable: true },
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
                                { name: 'symbol', class: "col-span-12 md:col-span-6 xl:col-span-6", label: 'الگو', type: 'input', value: `${cellValues?.row?.symbol}` },
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

export default OfferingUnit
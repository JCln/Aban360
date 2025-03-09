import { DataGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import { ID } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { fetchAllModule } from '../../api/AccessTree/module/index';
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { useQuery } from "react-query";
import { fetchMartyrMeterSummary } from '../../api/summary/index';
export const useModule = () => useQuery("module", fetchAllModule);

const MeterMartyrContent = (props) => {
    const { input } = props
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
        fetchMartyrMeterSummary({ input: input }).then(res => {
            setRows(res.data)
        }).catch(error => {
            console.log(error)
        })

    }, [])
    return (
        <>
            {/* <ActionBar
                formConfig={[
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'style', class: "col-span-12 xl:col-span-4", label: 'استایل', type: 'input' },
                    { name: 'appTitle', class: "col-span-12 xl:col-span-4", label: 'عنوان App', type: 'input' },
                    { name: 'clientRoute', class: "col-span-12 xl:col-span-4", label: 'مسیر', type: 'input' },
                    { name: 'logicalOrder', class: "col-span-12 xl:col-span-8", label: 'ترتیب', type: 'input' },
                    { name: 'inMenu', class: "col-span-12 xl:col-span-4", label: 'منو', type: 'checkbox', options: [{ value: true, label: 'منو' }] },
                    { name: 'isActive', class: "col-span-12 xl:col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true , label: 'فعال'}] },
                ]}
                title={" Module ایجاد"}
                apiFunction={createModule}
            /> */}

            {/* {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateModule}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteModule} id={selectId} />
            )} */}
            <DataGridComponent
                key={"MeterMartyrContent"}
                // handlePageSizeChange={handlePageSizeChange}
                columns={[
                    ...[ID(20),
                    { field: "bodySerial", headerName: " شماره بدنه کنتور", width: 150, headerAlign: "center", align: "center" },
                    { field: "installationDate", headerName: "تاریخ نصب", width: 180, headerAlign: "center", align: "center" },
                    { field: "meterUseTypeTitle", headerName: "نوع مصرف", width: 150, headerAlign: "center", align: "center" },
                    { field: "meterDiameterTitle", headerName: "قطر کنتور", width: 150, headerAlign: "center", align: "center" },
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
                                setFormData([
                                    { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` }
                                    ,])
                            };
                            return (
                                <div className="max-auto cursor-pointer w-full text-center"
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
        </>)
}

export default MeterMartyrContent 
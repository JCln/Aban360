import { DataGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import { DESCRIPTION, ID, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { mapToOptionsType } from '../../types/index';
import { createOffering, deleteOffering, fetchOffering, updateOffering } from "../../api/Services";
import { useOfferingGroup } from "./OfferingGroup";
import { useOfferingUnit } from "./OfferingUnit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Offering = () => {
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
        usageId: false
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    const { data: groups, error: errorGroups, isLoading: isLoadingGroups } = useOfferingGroup()
    const { data: units, error: errorUnit, isLoading: isLoadingUnit } = useOfferingUnit()
    const _units = mapToOptionsType(units);
    const _groups = mapToOptionsType(groups);

    useEffect(() => {
        setLoading(true)
        fetchOffering().then(res => {
            console.log(res)
            if (res?.data) {
                setRows(res.data)
                setLoading(false)
            }
        }).catch(error => {
            setLoading(false)
            console.log(error)
        })
    }, [])
    if (isLoadingGroups || isLoadingUnit)
        <div>... loading</div>
    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'title', class: "col-span-12   md:col-span-6 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'offeringGroupId', class: "col-span-12 xl:col-span-4", label: 'گروه اقلام', type: 'select', options: _groups ?? [] },
                    { name: 'offeringUnitId', class: "col-span-12 xl:col-span-4", label: 'واحد اقلام', type: 'select', options: _units ?? [] },
                    { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea' },
                    { name: 'installmentOption', class: "col-span-12 xl:col-span-4", label: ' اقساط', type: 'checkbox', options: [{ value: true, label: 'اقساط' }] },
                ]}
                title={"ایجاد  اقلام"}
                apiFunction={createOffering}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateOffering}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteOffering} id={selectId} />
            )}
            <DataGridComponent
                key={pageSize}
                columns={[
                    ...[ID(10), TITLE(400),
                    {
                        field: 'offeringGroupId', headerName: 'گروه اقلام', width: 120, align: "center", headerAlign: "center", sortable: true,
                        renderCell: (cellValues: any) => {
                            return (
                                <div className="max-auto w-full text-center">
                                    {_groups?.find((v) => v.id === cellValues?.row?.offeringGroupId)?.label}
                                </div>
                            );
                        },
                    },
                    {
                        field: 'offeringUnitId', headerName: 'واحد اقلام', width: 120, align: "center", headerAlign: "center", sortable: true,
                        renderCell: (cellValues: any) => {
                            return (
                                <div className="max-auto w-full text-center">
                                    {_units?.find((v) => v.id === cellValues?.row?.offeringUnitId)?.label}
                                </div>
                            );
                        },
                    },
                    {
                        field: 'installmentOption', headerName: 'اقساط', width: 100, align: "center", headerAlign: "center", sortable: true,
                        renderCell: (cellValues: any) => {
                            return (
                                <div className="max-auto w-full text-center">
                                    {cellValues?.row?.installmentOption === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
                                </div>
                            );
                        },

                    },
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
                                { name: 'title', class: "col-span-12 md:col-span-6 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                { name: 'offeringGroupId', class: "col-span-12 xl:col-span-4", label: 'گروه اقلام', type: 'select', options: _groups ?? [], defaultValue: _groups?.find((v) => v.id === cellValues?.row?.offeringGroupId) },
                                { name: 'offeringUnitId', class: "col-span-12 xl:col-span-4", label: 'واحد اقلام', type: 'select', options: _units ?? [], defaultValue: _units?.find((v) => v.id === cellValues?.row?.offeringUnitId) },
                                { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea', defaultValue: `${cellValues?.row?.description}` },
                                { name: 'installmentOption', class: "col-span-12 xl:col-span-4", label: ' اقساط', type: 'checkbox', options: [{ value: true, label: 'اقساط', isSelected: cellValues?.row?.installmentOption }] },
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

export default Offering
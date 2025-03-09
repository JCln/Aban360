import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { DataGridComponent, useColumnVisibilityModel } from '../Common/DataGridComponent';
import { faEdit, faEye, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Form/ButtonComponent';
import { GridColDef } from '@mui/x-data-grid';
import { fetchSiphon, fetchSiphonSummary } from '../../api/summary';
import CardWithTabs from '../Common/CardWithTabs';
import siphonIcon from '../../assets/images/icons/syphone.png'
import { icons } from '../Icons/Icons';
import { ID } from '../../components/Table/Columns';
import { usePaginationState } from '../../hooks/usePaginationState';

interface SiphonProps {
    input: string
}
const Siphon: FC<SiphonProps> = ({ input }) => {
    const [rows, setRows] = useState<any>()
    const [page, setPage] = useState(1);
    const { pageSize, handlePageSizeChange } = usePaginationState(5);
    const [formData, setFormData] = useState([])
    const [selectId, setSelectId] = useState(0)
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [open, setOpen] = useState(false)
    const defaultVisibilityModel = {
        id: false,
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };

    useEffect(() => {
        fetchSiphonSummary({ input: input }).then(res => {
            setRows(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [input])

    const tabs = [
        {
            label: "سیفون ها",
            icon: <img src={siphonIcon} width={27} alt="" />,
            content: (<div style={{ height: 250, width: "100%" }}>
                <DataGridComponent
                    key={"siphonesummary"}
                    // handlePageSizeChange={handlePageSizeChange}
                    columns={[
                        ...[ID(20),
                        { field: "installationDate", headerName: " تاریخ نصب  ", width: 150, headerAlign: "center", align: "center" },
                        { field: "installationLocation", headerName: " موقعیت نصب", width: 180, headerAlign: "center", align: "center" },
                        { field: "siphonDiameterTitle", headerName: " قطر سیفون", width: 150, headerAlign: "center", align: "center" },
                        { field: "siphonTypeTitle", headerName: " نوع سیفون", width: 150, headerAlign: "center", align: "center" },
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
            </div>),
        },
    ];

    return (
        <>
            <CardWithTabs
                tabs={tabs}
                maxHeight='250px'
                button={<ButtonComponent
                    icon={faPlus}
                    color={'primary-blue'}
                    title="ثبت سیفون جدید" />} />
        </>
    )
}

export default Siphon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { DatailGridComponent, useColumnVisibilityModel } from '../Common/DataGridComponent';
import { faEdit, faEye, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Form/ButtonComponent';
import { GridColDef } from '@mui/x-data-grid';
import { fetchBeneficiary, fetchOwnerInfo } from '../../api/summary';
import CardWithTabs from '../Common/CardWithTabs';
import { icons } from '../Icons/Icons';

interface OwnerProps {
    input: string
}
const Owner: FC<OwnerProps> = ({ input }) => {
    const [rows, setRows] = useState([])
    const [beneficiary, setBeneficiary] = useState([]) //zinafa

    const defaultVisibilityModel = {
        id: false,
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const columns: GridColDef[] = [

        { field: "id", headerName: "", width: 10 },
        {
            field: "firstName", headerName: "نام", width: 180,
            renderCell: (cellValues) => {
                return (
                    <div>نام : {cellValues?.row?.firstName}</div>
                )
            }
        },
        {
            field: "sureName", headerName: "نام خانوادگی", width: 150,
            renderCell: (cellValues) => {
                return (
                    <div> نام خانوادگی: {cellValues?.row?.sureName}</div>
                )
            }
        },
        {
            field: "fatherName", headerName: "نام پدر", width: 150,
            renderCell: (cellValues) => {
                return (
                    <div> نام پدر: {cellValues?.row?.fatherName}</div>
                )
            }
        },
        {
            field: "nationalId", headerName: "کدملی", width: 180,
            renderCell: (cellValues) => {
                return (
                    <div> کد ملی : {cellValues?.row?.nationalId}</div>
                )
            }
        },
        {
            field: "mobileNumber", headerName: "", width: 200,
            renderCell: (cellValues) => {
                return (
                    <div> تلفن همراه: {cellValues?.row?.mobileNumber}</div>
                )
            }
        },
        {
            field: "phoneNumber", headerName: "", width: 220,
            renderCell: (cellValues) => {
                return (
                    <div> تلفن ثابت: {cellValues?.row?.phoneNumber}</div>
                )
            }
        },
        // { field: "", headerName: "", width: 150 },
    ];
    const tabs = [
        {
            label: "مالک / مالکین",
            icon: <FontAwesomeIcon icon={faHome} />,
            content: (<div style={{ height: 250, width: "100%" }}>
                <DatailGridComponent
                    key={"owner"}
                    // handlePageSizeChange={handlePageSizeChange}
                    columns={[
                        ...columns,
                        {
                            field: "view",
                            headerName: "",
                            width: 20,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {

                                };
                                return (
                                    <div className="max-auto w-100 text-center"
                                        onClick={onClick}
                                    >
                                        <img src={icons?.eyeIcon} alt="" />
                                    </div>
                                );
                            },
                        },
                        {
                            field: "edit",
                            headerName: "",
                            width: 20,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {

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
                            width: 20,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {
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
                    handlePageChange={() => console.log}
                    totalRows={rows?.length}
                    height={217}
                    pageSize={10}
                    pagination={[5, 10, 15]}
                    checkboxSelection={false}
                    columnVisibilityModel={columnVisibilityModel}
                // handleColumnVisibilityModelChange={handleColumnVisibilityChange}

                />
            </div>),
        },
        {
            label: "ذی نفعان",
            icon: <FontAwesomeIcon icon={faHome} />,
            content: (<div style={{ height: 300, width: "100%" }}>
                <DatailGridComponent
                    key={"beneficiary"}
                    // handlePageSizeChange={handlePageSizeChange}
                    columns={[
                        ...columns,
                        {
                            field: "view",
                            headerName: "",
                            width: 20,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {

                                };
                                return (
                                    <div className="max-auto w-100 text-center"
                                        onClick={onClick}
                                    >
                                        <img src={icons?.eyeIcon} alt="" />
                                    </div>
                                );
                            },
                        },
                        {
                            field: "edit",
                            headerName: "ویرایش",
                            width: 20,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {
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
                            headerName: "حذف",
                            width: 20,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {
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
                    rows={beneficiary ?? []}
                    handlePageChange={() => console.log}
                    totalRows={rows?.length}
                    height={217}
                    pageSize={10}
                    pagination={[5, 10, 15]}
                    checkboxSelection={false}
                // columnVisibilityModel={columnVisibilityModel}
                // handleColumnVisibilityModelChange={handleColumnVisibilityChange}

                />
            </div>),
        },
    ];
    useEffect(() => {
        fetchOwnerInfo({ input: input }).then(res => {
            setRows(res.data)
        }).catch(error => {
            console.log(error)
        })

        fetchBeneficiary({ input: input }).then(res => {
            setBeneficiary(res.data)
        }).catch(error => {
            console.log(error)
        })

    }, [input])
    return (
        <>
            <CardWithTabs
                tabs={tabs}
                button={<ButtonComponent
                    icon={faPlus}
                    color={'primary-blue'}
                    title="ثبت مالک جدید" />} />
        </>
    )
}

export default Owner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { DatailGridComponent } from '../Common/DataGridComponent';
import { faEdit, faEye, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Form/ButtonComponent';
import { GridColDef } from '@mui/x-data-grid';
import { fetchBeneficiary, fetchMeter, fetchOwnerInfo, fetchSiphon } from '../../api/summary';
import CardWithTabs from '../Common/CardWithTabs';
import meterIcon from '../../assets/images/icons/meter.png'
import { icons } from '../Icons/Icons';

interface MeterProps {
    input: string
}
const Meter: FC<MeterProps> = ({ input }) => {
    const [rows, setRows] = useState<any>()

    const columns: GridColDef[] = [

        { field: "id", headerName: "", width: 10 },
        {
            field: "storey", headerName: "", width: 150,
            renderCell: (cellValues) => {
                return (
                    <div>  موقعیت جغرافیایی : {cellValues?.row?.storey}</div>
                )
            }
        },
    ];
    const tabs = [
        {
            label: "کنتور / کنتورها",
            icon: <img src={meterIcon} width={27} />,
            content: (<div style={{ height: 250, width: "100%" }}>
                <DatailGridComponent
                    key={"meter"}
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
                            width: 100,
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
                    rows={rows}
                    handlePageChange={() => console.log}
                    totalRows={20}

                    height={417}
                    pageSize={10}
                    pagination={[5, 10, 15]}
                    checkboxSelection={false}
                // columnVisibilityModel={columnVisibilityModel}
                // handleColumnVisibilityModelChange={handleColumnVisibilityChange}

                />
            </div>),
        },
        {
            label: "کنتور شاهد",
            icon: <img src={meterIcon} width={27} />,
            content: (<div style={{ height: 250, width: "100%" }}>
                <DatailGridComponent
                    key={20}
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
                                        <img src={icons?.eyeIcon} alt="" />
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
                    rows={[]}
                    handlePageChange={() => console.log}
                    totalRows={20}

                    height={417}
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
        fetchMeter({ input: input }).then(res => {
            setRows([res.data])
        }).catch(error => {
            console.log(error)
        })
    }, [input])
    return (
        <>
            <CardWithTabs tabs={tabs} button={<ButtonComponent icon={faPlus} color={'primary-blue'} title="ثبت کنتور جدید" />} />
        </>
    )
}

export default Meter
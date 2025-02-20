import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { DatailGridComponent } from '../Common/DataGridComponent';
import { faEdit, faEye, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Form/ButtonComponent';
import { GridColDef } from '@mui/x-data-grid';
import { fetchBeneficiary, fetchOwnerInfo, fetchPropertyInfo } from '../../api/summary';
import CardWithTabs from '../Common/CardWithTabs';
import HomeIcon from '../../assets/images/icons/home.png'
import flatIcon from '../../assets/images/icons/appartment.png'
import { icons } from '../Icons/Icons';

interface PropertyProps {
    input: string
}
const Property: FC<PropertyProps> = ({ input }) => {
    const [rows, setRows] = useState<any>()

    const columns: GridColDef[] = [

        { field: "id", headerName: "", width: 10 },
        {
            field: "improvements", headerName: "", width: 150,
            renderCell: (cellValues) => {
                return (
                    <div className='number'> عرصه: {cellValues?.row?.improvements} متر مربع</div>
                )
            }
        },
        {
            field: "premises", headerName: "", width: 180,
            renderCell: (cellValues) => {
                return (
                    <div className='number'>  اعیانی: {cellValues?.row?.premises} متر مربع</div>
                )
            }
        },
        // {
        //     field: "x", headerName: "", width: 150,
        //     renderCell: (cellValues) => {
        //         return (
        //             <div>تعداد طبقات: {cellValues?.row?.x}</div>
        //         )
        //     }
        // },
        {
            field: "y", headerName: "", width: 370,
            renderCell: (cellValues) => {
                return (
                    <div className='number'>  موقعیت جغرافیایی: {`${cellValues?.row?.x} ,${cellValues?.row?.y}`}</div>
                )
            }
        },
    ];
    const tabs = [
        {
            label: "ملک",
            icon: <img src={HomeIcon} width={27} />,
            content: (<div style={{ height: 250, width: "100%" }}>
                <DatailGridComponent
                    key={"property"}
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
                                        <img src={icons.eyeIcon} alt="" />
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
                                        <img src={icons.editIcon} alt="" />
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
                                        <img src={icons.trashIcon} alt="" />
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
                // columnVisibilityModel={columnVisibilityModel}
                // handleColumnVisibilityModelChange={handleColumnVisibilityChange}

                />
            </div>),
        },
        {
            label: "واحد",
            icon: <img src={flatIcon} width={27} />,

            content: (<div style={{ height: 300, width: "100%" }}>
                <DatailGridComponent
                    key={20}
                    // handlePageSizeChange={handlePageSizeChange}
                    columns={[
                        [...columns],
                        {
                            field: "edit",
                            headerName: "ویرایش",
                            width: 100,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {

                                };
                                return (
                                    <div className="max-auto w-100 text-center">
                                        Edit
                                        <ButtonComponent
                                            color="primary-blue"
                                            icon={faEdit}
                                            title="ویرایش"
                                            handleClick={onClick}
                                            className="w-100"
                                        />
                                    </div>
                                );
                            },
                        },
                        {
                            field: "delete",
                            headerName: "حذف",
                            width: 100,
                            align: "center",
                            headerAlign: "center",
                            renderCell: (cellValues: any) => {
                                const onClick = (e: any) => {

                                };
                                return (
                                    <div className="max-auto w-100 text-center">
                                        <ButtonComponent
                                            color="light-red"
                                            icon={faEdit}
                                            title="حذف"
                                            handleClick={onClick}
                                            className="w-100"
                                        />
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
        fetchPropertyInfo({ input: input }).then(res => {
            setRows([res.data])
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })

    }, [input])
    return (
        <>
            <CardWithTabs tabs={tabs} button={<ButtonComponent icon={faPlus} color={'primary-blue'} title="ثبت ملک جدید" />} />
        </>
    )
}

export default Property
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react'
import { DatailGridComponent } from '../Common/DataGridComponent';
import { faEdit, faEye, faHome, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonComponent from '../Form/ButtonComponent';
import { GridColDef } from '@mui/x-data-grid';
import { fetchSiphon } from '../../api/summary';
import CardWithTabs from '../Common/CardWithTabs';
import siphonIcon from '../../assets/images/icons/syphone.png'
import { icons } from '../Icons/Icons';

interface SiphonProps {
    input: string
}
const Siphon: FC<SiphonProps> = ({ input }) => {
    const [rows, setRows] = useState<any>()

    useEffect(() => {
        fetchSiphon({ input: input }).then(res => {
            setRows([res.data])
        }).catch(error => {
            console.log(error)
        })
    }, [input])
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
            label: "سیفون ها",
            icon: <img src={siphonIcon} width={27} />,
            content: (<div style={{ height: 250, width: "100%" }}>
                <DatailGridComponent
                    key={"siphone"}
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
    ];

    return (
        <>
            <CardWithTabs 
            tabs={tabs} 
            button={<ButtonComponent 
            icon={faPlus} 
            color={'primary-blue'} 
            title="ثبت سیفون جدید" />} />
        </>
    )
}

export default Siphon
import { DatailGridComponent, useColumnVisibilityModel } from "../../components/Common/DataGridComponent";
import { ID, modulePermissions, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { createModule, deleteModule } from "../../api/AccessTree/module";
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import { captchaLang, captchaLangPost, captchaMode } from "../../api/Captcha";
import { useQuery } from "react-query";
export const useCaptchaLang = () => useQuery("captchalang", captchaLang);

const Lang = () => {
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
        // setLoading(true)
        captchaLang().then(res => {
            if (res.data) {
                console.log(res)
                setRows(res.data)
            }
        }).catch(error =>
            console.log(error)
        )

    }, [])
    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'title', class: "col-span-12 xl:col-span-5", label: 'عنوان', type: 'input' },
                ]}
                title={" ایجاد زبان تصویر امنیتی "}
                apiFunction={captchaLangPost}
            />
            {/* {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={captc}
                open={open}
            />} */}
            {/* {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteModule} id={selectId} />
            )} */}
            <DatailGridComponent
                key={"modulePermission"}
                // handlePageSizeChange={handlePageSizeChange}
                columns={[
                    ...[ID(100), TITLE(500)],
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
                                    { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
                                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.id}` },
                                ])
                            }
                            return (
                                <div className="max-auto w-full text-center"
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
                pageSize={10}
                pagination={[5, 10, 15]}
                checkboxSelection={false}
                columnVisibilityModel={columnVisibilityModel}
                handlePageSizeChange={handlePageSizeChange}
                handlePageChange={handlePageChange}
                handleColumnVisibilityModelChange={handleColumnVisibilityChange}
            // handleColumnVisibilityModelChange={handleColumnVisibilityChange}

            />
        </div>)
}

export default Lang
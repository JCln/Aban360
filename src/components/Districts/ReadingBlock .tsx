import { DatailGridComponent, useColumnVisibilityModel } from "../../components/Common/DataGridComponent";
import { ID, modulePermissions, provinceColumns, readingBlockColumns, TITLE } from '../Table/Columns';
import ActionBar from '../Management/ActionBar';
import { createModule, deleteModule } from "../../api/AccessTree/module";
import { icons } from '../Icons/Icons';
import { useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import { captchaLang, captchaLangPost, captchaMode } from "../../api/Captcha";
import { useQuery } from "react-query";
import { createCountry, createProvince, createReadingBlock, deleteCordinalDirection, deleteCountry, deleteProvince, deleteReadingBlock, fetchCordinalDirection, fetchCountry, fetchProvince, fetchReadingBlock, updateCordinalDirection, updateCountry, updateProvince, updateReadingBlock } from "../../api/Districts";
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { useCountry } from "./Country";
import { useCordinalDirection } from "./CordinalDirection";
import { useReadingBound } from "./ReadingBound";

const ReadingBlock = () => {
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
        readingBoundId: false,
    }
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    const { data, error, isLoading } = useReadingBound()
    const _readingBound = Array.isArray(data?.data)
        ? data?.data?.map(item => ({
            id: item?.id,
            value: item?.id,
            label: item?.title,
        }))
        : [];

    useEffect(() => {
        setLoading(true)
        fetchReadingBlock().then(res => {
            if (res.data) {
                console.log(res)
                setLoading(false)
                setRows(res.data)
            }
        }).catch(error =>
            console.log(error)
        )
    }, [])
    if (isLoading) return <div>...loading ReadingBound</div>;

    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={[
                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input' },
                    { name: 'readingBoundId', class: "col-span-12 xl:col-span-4", label: 'نام ناحیه اشتراکی', type: 'select', options: _readingBound ?? [] },
                    { name: 'fromReadingNumber', class: "col-span-12 xl:col-span-4", label: 'fromReadingNumber', type: 'input' },
                    { name: 'toReadingNumber', class: "col-span-12 xl:col-span-4", label: 'toReadingNumber', type: 'input' },
                ]}
                title={" ایجاد بلوک اشتراکی "}
                apiFunction={createReadingBlock}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={() => setOpen(!open)}
                apiFunction={updateReadingBlock}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteReadingBlock} id={selectId} />
            )}
            <DatailGridComponent
                key={"modulePermission"}
                columns={[
                    ...readingBlockColumns,
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
                                    { name: 'title', class: "col-span-12 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
                                    { name: 'readingBoundId', class: "col-span-12 xl:col-span-4", label: 'کشور', type: 'select', options: _readingBound ?? [], defaultValue: _readingBound?.find(v => v.id === cellValues?.row?.readingBoundId) },
                                    { name: 'fromReadingNumber', class: "col-span-12 xl:col-span-4", label: 'fromReadingNumber', type: 'input' },
                                    { name: 'toReadingNumber', class: "col-span-12 xl:col-span-4", label: 'toReadingNumber', type: 'input' },
                                ])
                            }
                            return (
                                <div className="max-auto w-full cursor-pointer text-center"
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
        </div>)
}

export default ReadingBlock
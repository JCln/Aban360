import { DataGridComponent, useColumnVisibilityModel } from "../Common/DataGridComponent";
import ActionBar from '../Management/ActionBar';
import { FC, useEffect, useState } from "react";
import { usePaginationState } from '../../hooks/usePaginationState';
import EditComponent from '../Form/EditComponent';
import DeleteConfirmation from '../Common/DeletConfirmation';
import { icons } from '../Icons/Icons';
import { CrudProps } from "../../types";

const Crud: FC<CrudProps> = ({ handleClose, hideColumns, formData, open, fetchFunction, createFunction, updateFunction, deleteFunction, formConfig, title, columns, handleEditClick }) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { pageSize, handlePageSizeChange } = usePaginationState(5);
    const [page, setPage] = useState(1);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [selectId, setSelectId] = useState(0);
    const defaultVisibilityModel = hideColumns;
    const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
    const handlePageChange = (newPage: any) => {
        setPage(newPage?.page + 1);
    };
    useEffect(() => {
        setLoading(true);
        fetchFunction().then(res => {
            if (res?.data) {
                setRows(res.data);
                setLoading(false);
            }
        }).catch(error => {
            setLoading(false);
            console.log(error);
        });
    }, []);
    return (
        <div style={{ height: 750, width: "100%" }}>
            <ActionBar
                formConfig={formConfig}
                title={title}
                apiFunction={createFunction}
            />
            {open && <EditComponent
                formConfig={formData}
                title={"ویرایش"}
                handleClose={handleClose}
                apiFunction={updateFunction}
                open={open}
            />}
            {deleteDialog && selectId && (
                <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteFunction} id={selectId} />
            )}
            <DataGridComponent
                key={pageSize}
                columns={[...columns,
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
                height={550}
                pageSize={pageSize}
                pagination={[5, 25, 50]}
                checkboxSelection={false}
                columnVisibilityModel={columnVisibilityModel}
                handlePageSizeChange={handlePageSizeChange}
                handlePageChange={handlePageChange}
                handleColumnVisibilityModelChange={handleColumnVisibilityChange}
            />
        </div>
    );
};

export default Crud;

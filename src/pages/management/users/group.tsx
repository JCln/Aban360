import { useEffect, useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Common/BreadCrumb';
import ActionBar from '../../../components/Management/ActionBar';
import { DatailGridComponent, useColumnVisibilityModel } from '../../../components/Common/DataGridComponent';
import { icons } from '../../../components/Icons/Icons';
import { deleteRole, fetchRoles, updateRole } from '../../../api/Roles';
import { usePaginationState } from '../../../hooks/usePaginationState';
import { roleColumns } from '../../../components/Table/Columns';
import EditComponent from '../../../components/Form/EditComponent';
import DeleteConfirmation from '../../../components/Common/DeletConfirmation';
import { path } from '../../../config/path';

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [rows, setRows] = useState<any>([])
  const navigate = useNavigate();
  const { pageSize, handlePageSizeChange } = usePaginationState(5);
  const [page, setPage] = useState(1);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectId, setSelectId] = useState(0)
  const defaultVisibilityModel = {
    id: false,
    defaultClaims:false
  }
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState([])

  const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
  const handlePageChange = (newPage: any) => {
    setPage(newPage?.page + 1);
  };

  useEffect(() => {
    setLoading(true)
    fetchRoles().then(res => {
      if (res.data) {
        setLoading(false)
        setRows(res.data)
      }
    }).catch(error =>
      console.log(error)
    )
  }, [])
  return (
    <DefaultLayout>
      <div className="management-page container mx-auto">
        {loading ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 loading">
            <Loading type={"spin"} color="#3856ac" />
          </div>
        ) : (
          ""
        )}
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { href: path.userManagement, label: "مدیریت کاربران" }, { label: "مدیریت گروه" }]} />
        <div className="p-6 bg-white rounded-md content">
          <ActionBar
            isModalRequest={false}
            path={path.createGroupUsers}
          />
          {open && <EditComponent
            formConfig={formData}
            title={"ویرایش"}
            handleClose={() => setOpen(!open)}
            apiFunction={updateRole}
            open={open}
          />}
          {deleteDialog && selectId && (
            <DeleteConfirmation show={deleteDialog} handleClose={() => setDeleteDialog(false)} apiFunction={deleteRole} id={selectId} />
          )}

          <DatailGridComponent
            key={"property"}
            // handlePageSizeChange={handlePageSizeChange}
            columns={[
              ...roleColumns,
              // {
              //   field: "view",
              //   headerName: "مشاهده",
              //   width: 70,
              //   align: "center",
              //   headerAlign: "center",
              //   renderCell: (cellValues: any) => {
              //     const onClick = (e: any) => {

              //     };
              //     return (
              //       <div className="max-auto w-100 text-center"
              //         onClick={onClick}
              //       >
              //         <img src={icons.eyeIcon} alt="" />
              //       </div>
              //     );
              //   },
              // },
              {
                field: "edit",
                headerName: "ویرایش",
                width: 70,
                align: "center",
                headerAlign: "center",
                renderCell: (cellValues: any) => {
                  const onClick = (e: any) => {
                    navigate(path?.editGroupUsers + cellValues?.row?.id)
                  };
                  return (
                    <div className="max-auto cursor-pointer w-100 text-center"
                      onClick={onClick}
                    >
                      <img src={icons.editIcon} alt="" />
                    </div>
                  );
                },
              },
              {
                field: "delete",
                headerName: "حذف",
                width: 70,
                align: "center",
                headerAlign: "center",
                renderCell: (cellValues: any) => {
                  const onClick = (e: any) => {
                  };
                  return (
                    <div className="max-auto cursor-pointer w-100 text-center"
                      onClick={onClick}
                    >
                      <img src={icons.trashIcon} alt="" />
                    </div>

                  );
                },
              },
            ]}
            rows={rows ?? []}
            totalRows={rows?.length}
            height={475}
            pageSize={pageSize}
            pagination={[5, 10, 15]}
            checkboxSelection={false}
            columnVisibilityModel={columnVisibilityModel}
            handlePageSizeChange={handlePageSizeChange}
            handlePageChange={handlePageChange}
            handleColumnVisibilityModelChange={handleColumnVisibilityChange}

          />

        </div>
      </div>
    </DefaultLayout>
  );
};


export default Page
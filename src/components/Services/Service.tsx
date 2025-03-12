import { ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useQuery } from 'react-query';
import { useCompanyServiceType } from './Type';
import { mapToOptionsType } from '../../types/index';
export const useCompanyService = () => useQuery("company-service", () => fetchResource('company-service'));

const Service = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const { data, error: errorGroups, isLoading: isLoadingGroups } = useCompanyServiceType()
    const companyServiceTypes = mapToOptionsType(data);

    const defaultVisibilityModel = { id: false, companyServiceTypeId: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-8", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'companyServiceTypeId', class: "col-span-12 xl:col-span-4", label: 'گروه خدمات  ', type: 'select', options: companyServiceTypes ?? [], defaultValue: companyServiceTypes?.find((v) => v.id === cellValues?.row?.companyServiceTypeId) },

        ]);
    };
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('company-service')}
            createFunction={(params) => createResource('company-service', params)}
            updateFunction={(params) => updateResource('company-service', params)}
            deleteFunction={(params) => deleteResource('company-service', params)}
            formConfig={[
                { name: 'id', class: "col-span-4", label: 'کد', type: 'input' },
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                { name: 'companyServiceTypeId', class: "col-span-12 xl:col-span-4", label: 'گروه خدمات  ', type: 'select', options: companyServiceTypes ?? [] },
            ]}
            title={"ایجاد خدمات"}
            columns={[
                ...[ID(10), TITLE(400),
                { field: 'companyServiceTypeId', headerName: 'companyServiceTypeId', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'companyServiceTypeTitle', headerName: 'گروه خدمات', width: 150, align: "center", headerAlign: "center", sortable: true, },
                ],
                {
                    field: "edit",
                    headerName: "",
                    width: 100,
                    align: "center",
                    headerAlign: "center",
                    renderCell: (cellValues: any) => (
                        <div className="max-auto cursor-pointer w-100 text-center" onClick={() => handleEditClick(cellValues)}>
                            <img src={icons?.editIcon} alt="" />
                        </div>
                    ),
                },
            ]}
            handleEditClick={handleEditClick}
        />
    );
};

export default Service
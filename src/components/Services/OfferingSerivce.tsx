import { ID } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { mapToOptionsType } from '../../types/index';
import { useCompanyService } from './Service';
import { useOffering } from './Offering';

const OfferingSerivce = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, offeringId: false, companyServiceId: false };
    const { data: companies, error: errorCompanies, isLoading: isLoadingCompanies } = useCompanyService()
    const { data: _offering, error: errorOffering, isLoading: isLoadingOffering } = useOffering()
    const companyService = mapToOptionsType(companies);
    const offering = mapToOptionsType(_offering);
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'companyServiceId', class: "col-span-12 xl:col-span-6", label: 'سرویس خدمات ', type: 'select', options: companyService ?? [], defaultValue: companyService?.find((v) => v.id === cellValues?.row?.companyServiceId) },
            { name: 'offeringId', class: "col-span-12 xl:col-span-6", label: ' اقلام', type: 'select', options: offering ?? [], defaultValue: offering?.find((v) => v.id === cellValues?.row?.offeringId) },
        ]);
    };
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('company-service-offering')}
            createFunction={(params) => createResource('company-service-offering', params)}
            updateFunction={(params) => updateResource('company-service-offering', params)}
            deleteFunction={(params) => deleteResource('company-service-offering', params)}
            formConfig={[
                { name: 'id', class: "md:col-span-4 xl:col-span-6 col-span-12", label: 'کد', type: 'input' },
                { name: 'companyServiceId', class: "col-span-12 xl:col-span-6", label: 'سرویس خدمات ', type: 'select', options: companyService ?? [] },
                { name: 'offeringId', class: "col-span-12 xl:col-span-6", label: ' اقلام', type: 'select', options: offering ?? [] },
            ]}
            title={"ایجاد خدمات اقلام"}
            columns={[
                ...[ID(10),
                { field: 'companyServiceId', headerName: 'companyServiceId', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'offeringId', headerName: 'offeringId', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'companyServiceTitle', headerName: 'خدمات', width: 350, align: "center", headerAlign: "center", sortable: true, },
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

export default OfferingSerivce
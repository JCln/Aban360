import { DESCRIPTION, ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useQuery } from 'react-query';
import { useTariffCalculationMode } from '../Tariff/Calculate';
import { mapToOptionsType } from '../../types/index';
export const useCompanyServiceType = () => useQuery("companyServiceType", () => fetchResource('company-service-type'));

const Type = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const { data, error, isLoading } = useTariffCalculationMode()
    const tariffCalculationMode = mapToOptionsType(data);

    const defaultVisibilityModel = { id: false, tariffCalculationModeId: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-8", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'tariffCalculationModeId', class: "col-span-12 xl:col-span-4", label: 'نحوه محاسبه ', type: 'select', options: tariffCalculationMode ?? [], defaultValue: tariffCalculationMode?.find(v => v.id === cellValues?.row?.tariffCalculationModeId) },
            { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea', defaultValue: `${cellValues?.row?.description}`},
        ]);
    };
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('company-service-type')}
            createFunction={(params) => createResource('company-service-type', params)}
            updateFunction={(params) => updateResource('company-service-type', params)}
            deleteFunction={(params) => deleteResource('company-service-type', params)}
            formConfig={[
                { name: 'id', class: "col-span-4", label: 'کد', type: 'input' },
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                { name: 'tariffCalculationModeId', class: "col-span-12 xl:col-span-4", label: 'نحوه محاسبه ', type: 'select', options: tariffCalculationMode ?? []  },
                { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea' },
            ]}
            title={"ایجاد گروه خدمات"}
            columns={[
                ...[ID(10), TITLE(400),
                { field: 'tariffCalculationModeTitle', headerName: 'نحوه محاسبه', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'tariffCalculationModeId', headerName: '', width: 150, },
                DESCRIPTION(350)
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

export default Type
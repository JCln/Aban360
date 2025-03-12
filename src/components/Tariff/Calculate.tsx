import { DESCRIPTION, ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useQuery } from 'react-query';
export const useTariffCalculationMode = () => useQuery("tariffCalculationMode", () => fetchResource('tariff-calculation-mode'));

const Calcualte = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, tariffCalculationModeId: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-8", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea', },
        ]);
    };
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('tariff-calculation-mode')}
            createFunction={(params) => createResource('tariff-calculation-mode', params)}
            updateFunction={(params) => updateResource('tariff-calculation-mode', params)}
            deleteFunction={(params) => deleteResource('tariff-calculation-mode', params)}
            formConfig={[
                { name: 'id', class: "xl:col-span-6 md:col-span-6 col-span-12", label: 'کد', type: 'input' },
                { name: 'title', class: "xl:col-span-6 md:col-span-6 col-span-12", label: 'عنوان', type: 'input' },
                { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea' },
            ]}
            title={"ایجادفرمول های تعرفه"}
            columns={[
                ...[ID(10), TITLE(400),
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

export default Calcualte
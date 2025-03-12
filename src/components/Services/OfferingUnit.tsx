import { ID, TITLE } from '../Table/Columns';
import { icons } from '../Icons/Icons';
import { useQuery } from "react-query";
import { createResource, deleteResource, fetchResource, updateResource } from "../../api";
import Crud from "../../components/Data/Crud";
import { useState } from 'react';
export const useOfferingUnit = () => useQuery("OfferingUnit", () => fetchResource('offering-unit'));

const OfferingUnit = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-12 md:col-span-6 xl:col-span-6", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'symbol', class: "col-span-12 md:col-span-6 xl:col-span-6", label: 'الگو', type: 'input', value: `${cellValues?.row?.title}` },
        ]);
    };

    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('offering-unit')}
            createFunction={(params) => createResource('offering-unit', params)}
            updateFunction={(params) => updateResource('offering-unit', params)}
            deleteFunction={(params) => deleteResource('offering-unit', params)}
            formConfig={[
                { name: 'title', class: "col-span-6", label: 'عنوان', type: 'input' },
                { name: 'symbol', class: "col-span-6", label: 'الگو', type: 'input' },
            ]}
            title={"ایجاد واحد اقلام"}
            columns={[
                ...[ID(10), TITLE(400),
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
}

export default OfferingUnit
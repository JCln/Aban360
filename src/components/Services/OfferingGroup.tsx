import { ID, TITLE } from '../Table/Columns';
import { icons } from '../Icons/Icons';
import { useQuery } from "react-query";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { useState } from 'react';
export const useOfferingGroup = () => useQuery("OfferingGroup", () => fetchResource('offering-group'));

const OfferingGroup = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-12 md:col-span-6 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
        ]);
    };

    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('offering-group')}
            createFunction={(params) => createResource('offering-group', params)}
            updateFunction={(params) => updateResource('offering-group', params)}
            deleteFunction={(params) => deleteResource('offering-group', params)}
            formConfig={[
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
            ]}
            title={"ایجاد گروه اقلام"}
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

export default OfferingGroup
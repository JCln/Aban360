import { ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useReadingPeriodType } from './Type';
import { mapToOptionsType } from '../../types/index';

const Period = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, readingPeriodTypeId:false };
    const { data, error, isLoading } = useReadingPeriodType()
    const readingPeriodType = mapToOptionsType(data);
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'clientOrder', class: "col-span-4", label: 'ترتیب', type: 'input', value: `${cellValues?.row?.clientOrder}` },
            { name: 'readingPeriodTypeId', class: "col-span-12 xl:col-span-4", label: ' نوع دوره قرائت', type: 'select', options: readingPeriodType ?? [], defaultValue: readingPeriodType?.find(v => v.id === cellValues?.row?.readingPeriodTypeId) },
        ]);
    };
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('reading-period')}
            createFunction={(params) => createResource('reading-period',params)}
            updateFunction={(params) => updateResource('reading-period',params)}
            deleteFunction={(params) => deleteResource('reading-period',params)}
            formConfig={[
                // { name: 'id', class: "col-span-6", label: 'کد', type: 'input' },
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                { name: 'clientOrder', class: "col-span-4", label: 'ترتیب', type: 'input' },
                { name: 'readingPeriodTypeId', class: "col-span-12 xl:col-span-4", label: ' نوع دوره قرائت', type: 'select', options: readingPeriodType ?? [] },

            ]}
            title={"ایجاد دوره قرائت"}
            columns={[
                ...[ID(10), TITLE(400),
                    { field: 'clientOrder', headerName: 'ترتیب', width: 150, align: "center", headerAlign: "center", sortable: true, },
                    { field: 'readingPeriodTypeId', headerName: '', width: 150, align: "center", headerAlign: "center", sortable: true, },
                    // { field: 'readingPeriodTypeTitle', headerName: 'نوع دوره قرائت', width: 150, align: "center", headerAlign: "center", sortable: true, },
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

export default Period
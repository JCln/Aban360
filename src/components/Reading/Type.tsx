import { ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useHeadquarters } from '../Districts/Headquarters';
import { mapToOptionsType } from '../../types/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
export const useReadingPeriodType = () => useQuery("reading-period-type", () => fetchResource('reading-period-type'));

const Type = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, headquartersId: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-8", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'days', class: "col-span-6", label: 'روز', type: 'input', value: `${cellValues?.row?.days}` },
            { name: 'clientOrder', class: "col-span-6", label: 'ترتیب', type: 'input', value: `${cellValues?.row?.clientOrder}` },
            { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: headquarters ?? [], defaultValue: headquarters?.find(v => v.id === cellValues?.row?.headquartersId) },
            { name: 'isEnabled', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال", isSelected: cellValues?.row?.isEnabled }] },


        ]);
    };
    const { data, error, isLoading } = useHeadquarters()
    const headquarters = mapToOptionsType(data);
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('reading-period-type')}
            createFunction={(params) => createResource('reading-period-type', params)}
            updateFunction={(params) => updateResource('reading-period-type', params)}
            deleteFunction={(params) => deleteResource('reading-period-type', params)}
            formConfig={[
                // { name: 'id', class: "col-span-6", label: 'کد', type: 'input' },
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                { name: 'days', class: "col-span-4", label: 'روز', type: 'input' },
                { name: 'clientOrder', class: "col-span-4", label: 'ترتیب', type: 'input' },
                { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: headquarters ?? [] },
                { name: 'isEnabled', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال", }] },
            ]}
            title={"ایجاد  نوع  دوره قرائت "}
            columns={[
                ...[ID(10), TITLE(400),
                { field: 'clientOrder', headerName: 'ترتیب', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'days', headerName: 'روز', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'headquartersTitle', headerName: 'نام شرکت', width: 150, align: "center", headerAlign: "center", sortable: true },
                { field: 'headquartersId', headerName: '', width: 150, align: "center", headerAlign: "center", sortable: true },
                {
                    field: 'isEnabled', headerName: 'فعال', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.isEnabled === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
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
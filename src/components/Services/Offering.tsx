import { DESCRIPTION, ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useQuery } from 'react-query';
import { mapToOptionsType } from '../../types';
import { useOfferingUnit } from './OfferingUnit';
import { useOfferingGroup } from './OfferingGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
export const useOffering = () => useQuery("offering", () => fetchResource('offering'));

const Offering = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, headquartersId: false };
    const { data: groups, error: errorGroups, isLoading: isLoadingGroups } = useOfferingGroup()
    const { data: units, error: errorUnit, isLoading: isLoadingUnit } = useOfferingUnit()
    const _units = mapToOptionsType(units);
    const _groups = mapToOptionsType(groups);
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-12 md:col-span-6 xl:col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'offeringGroupId', class: "col-span-12 xl:col-span-4", label: 'گروه اقلام', type: 'select', options: _groups ?? [], defaultValue: _groups?.find((v) => v.id === cellValues?.row?.offeringGroupId) },
            { name: 'offeringUnitId', class: "col-span-12 xl:col-span-4", label: 'واحد اقلام', type: 'select', options: _units ?? [], defaultValue: _units?.find((v) => v.id === cellValues?.row?.offeringUnitId) },
            { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea', defaultValue: `${cellValues?.row?.description}` },
            { name: 'installmentOption', class: "col-span-12 xl:col-span-4", label: ' اقساط', type: 'checkbox', options: [{ value: true, label: 'اقساط', isSelected: cellValues?.row?.installmentOption }] },
        ]);
    };

    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('offering')}
            createFunction={(params) => createResource('offering', params)}
            updateFunction={(params) => updateResource('offering', params)}
            deleteFunction={(params) => deleteResource('offering', params)}
            formConfig={[
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                { name: 'offeringGroupId', class: "col-span-12 xl:col-span-4", label: 'گروه اقلام', type: 'select', options: _groups ?? [] },
                { name: 'offeringUnitId', class: "col-span-12 xl:col-span-4", label: 'واحد اقلام', type: 'select', options: _units ?? [] },
                { name: 'description', class: "col-span-12 xl:col-span-12", label: 'توضیحات', type: 'textarea' },
                { name: 'installmentOption', class: "col-span-12 xl:col-span-4", label: ' اقساط', type: 'checkbox', options: [{ value: true, label: 'اقساط' }] },

            ]}
            title={"ایجاد اقلام"}
            columns={[
                ...[ID(10), TITLE(400),
                {
                    field: 'offeringGroupId', headerName: 'گروه اقلام', width: 120, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {_groups?.find((v) => v.id === cellValues?.row?.offeringGroupId)?.label}
                            </div>
                        );
                    },
                },
                {
                    field: 'offeringUnitId', headerName: 'واحد اقلام', width: 120, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {_units?.find((v) => v.id === cellValues?.row?.offeringUnitId)?.label}
                            </div>
                        );
                    },
                },
                {
                    field: 'installmentOption', headerName: 'اقساط', width: 100, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.installmentOption === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white" icon={faClose} />}
                            </div>
                        );
                    },

                },
                DESCRIPTION(400)
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

export default Offering
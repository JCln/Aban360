import { ID, TITLE } from '../Table/Columns';
import { useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { useHeadquarters } from '../Districts/Headquarters';
import { mapToOptionsType } from '../../types/index';

const State = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, headquartersId: false };
    const { data, error, isLoading } = useHeadquarters()
    const headquarters = mapToOptionsType(data);
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
            { name: 'clientOrder', class: "col-span-4", label: 'ترتیب', type: 'input', value: `${cellValues?.row?.clientOrder}` },
            { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: headquarters ?? [], defaultValue: headquarters?.find(v => v.id === cellValues?.row?.headquartersId) },
            { name: 'enterNumberOption', class: "col-span-4", label: 'رقم اختیاری', type: 'checkbox', options: [{ value: true, label: "رقم اختیاری", isSelected: cellValues?.row?.enterNumberOption }] },
            { name: 'numberRequired', class: "col-span-4", label: ' اجبار رقم', type: 'checkbox', options: [{ value: true, label: "اجبار رقم", isSelected: cellValues?.row?.numberRequired }] },
            { name: 'nonReadable', class: "col-span-4", label: 'nonReadable', type: 'checkbox', options: [{ value: true, label: "nonReadable" }] },
            { name: 'numberLessThanPre', class: "col-span-4", label: 'فعلی کمتراز قبلی', type: 'checkbox', options: [{ value: true, label: "فعلی کمتراز قبلی" }] },
            { name: 'isChanged', class: "col-span-4", label: 'تعویضی', type: 'checkbox', options: [{ value: true, label: "تعویضی", isSelected: cellValues?.row?.isChanged }] },
            { name: 'isBroken', class: "col-span-4", label: 'خراب', type: 'checkbox', options: [{ value: true, label: "خراب", isSelected: cellValues?.row?.isBroken }] },
            { name: 'isNull', class: "col-span-4", label: 'isNull', type: 'checkbox', options: [{ value: true, label: "isNull", isSelected: cellValues?.row?.isNull }] },
            { name: 'isEnabled', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال", isSelected: cellValues?.row?.isEnabled }] },
            { name: 'imageRequired', class: "col-span-4", label: 'تصویر', type: 'checkbox', options: [{ value: true, label: "تصویر", isSelected: cellValues?.row?.imageRequired }] },
        ]);
    };
    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('counter-state')}
            createFunction={(params) => createResource('counter-state',params)}
            updateFunction={(params) => updateResource('counter-state',params)}
            deleteFunction={(params) => deleteResource('counter-state',params)}
            formConfig={[
                { name: 'title', class: "col-span-4", label: 'عنوان', type: 'input' },
                { name: 'clientOrder', class: "col-span-4", label: 'ترتیب', type: 'input', },
                { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: headquarters ?? [] },
                { name: 'enterNumberOption', class: "col-span-4", label: 'رقم اختیاری', type: 'checkbox', options: [{ value: true, label: "رقم اختیاری" }] },
                { name: 'numberRequired', class: "col-span-4", label: ' اجبار رقم', type: 'checkbox', options: [{ value: true, label: "اجبار رقم" }] },
                { name: 'nonReadable', class: "col-span-4", label: 'nonReadable', type: 'checkbox', options: [{ value: true, label: "nonReadable" }] },
                { name: 'numberLessThanPre', class: "col-span-4", label: 'فعلی کمتراز قبلی', type: 'checkbox', options: [{ value: true, label: "فعلی کمتراز قبلی" }] },
                { name: 'isChanged', class: "col-span-4", label: 'تعویضی', type: 'checkbox', options: [{ value: true, label: "تعویضی", }] },
                { name: 'isBroken', class: "col-span-4", label: 'خراب', type: 'checkbox', options: [{ value: true, label: "خراب", }] },
                { name: 'isNull', class: "col-span-4", label: 'isNull', type: 'checkbox', options: [{ value: true, label: "isNull", }] },
                { name: 'isEnabled', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال", }] },
                { name: 'imageRequired', class: "col-span-4", label: 'تصویر', type: 'checkbox', options: [{ value: true, label: "تصویر", }] },
            ]}
            title={"ایجاد وضعیت کنتور    "}
            columns={[
                ...[ID(10), TITLE(100),
                { field: 'clientOrder', headerName: 'ترتیب', width: 150, align: "center", headerAlign: "center", sortable: true, },
                { field: 'headquartersTitle', headerName: 'نام شرکت', width: 150, align: "center", headerAlign: "center", sortable: true },
                {
                    field: 'enterNumberOption', headerName: 'رقم اختیاری', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.enterNumberOption === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
                {
                    field: 'numberRequired', headerName: 'اجبار رقم', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.numberRequired === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
                {
                    field: 'nonReadable', headerName: 'nonReadable', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.nonReadable === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
                {
                    field: 'numberLessThanPre', headerName: 'فعلی کمتراز قبلی', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.numberLessThanPre === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
                {
                    field: 'isChanged', headerName: 'تعویضی', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.isChanged === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
                {
                    field: 'isBroken', headerName: 'خراب', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.isBroken === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
                {
                    field: 'isNull', headerName: 'isNull', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.isNull === true ? <FontAwesomeIcon className="bg-green p-1 rounded text-white  w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white  w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },
                },
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
                {
                    field: 'imageRequired', headerName: 'تصویر', width: 150, align: "center", headerAlign: "center", sortable: true,
                    renderCell: (cellValues: any) => {
                        return (
                            <div className="max-auto w-full text-center">
                                {cellValues?.row?.imageRequired === true ? <FontAwesomeIcon className="bg-blue p-1 rounded text-white w-3 h-3" icon={faCheck} /> : <FontAwesomeIcon className="bg-red p-1 rounded text-white w-3 h-3" icon={faClose} />}
                            </div>
                        );
                    },

                },
                { field: 'headquartersId', headerName: '', width: 150, align: "center", headerAlign: "center", sortable: true },
                    // { field: '', headerName: '', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
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

export default State
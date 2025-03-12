import { ID, TITLE } from '../Table/Columns';
import {  useState } from "react";
import Crud from '../Data/Crud';
import { createResource, deleteResource, fetchResource, updateResource } from '../../api/index';
import { icons } from '../Icons/Icons';
import { useHeadquarters } from '../Districts/Headquarters';
import { mapToOptionsType } from '../../types';

const Default = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false, headquartersId:false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'nonReadDefault', class: "col-span-4", label: 'nonReadDefault', type: 'input' },
            { name: 'nonReadMax', class: "col-span-4", label: '', type: 'input' },
            { name: 'nonReadMin', class: "col-span-4", label: '', type: 'input' },
            { name: 'domesticLowConstBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'domesticLowPercentBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'domesticHighConstBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'domesticHighPercentBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'constructionLowConstBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'constructionLowPercentBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'constructionHighConstBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'constructionHighPercentBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'contractualCapacityLowConstBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'contractualCapacityLowPercentBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'contractualCapacityHighConstBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'contractualCapacityHighPercentBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'nonDomesticLowPercentRateBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'nonDomesticHighPercentRateBound', class: "col-span-4", label: '', type: 'input' },
            { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: headquarters ?? [] },
            { name: 'preNumberDisplayOption', class: "col-span-4", label: '', type: 'checkbox', options:  [{ value: true, label: "preNumberDisplayOption" }] },
            { name: 'billIdDisplayOption', class: "col-span-4", label: '', type: 'checkbox', options:  [{ value: true, label: "preNumberDisplayOption" }] },
            { name: 'customerNumberDisplayOption', class: "col-span-4", label: '', type: 'checkbox', options:  [{ value: true, label: "preNumberDisplayOption" }] },
            { name: 'preDateDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
            { name: 'mobileDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
            { name: 'debtDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
            { name: 'iconsDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
            { name: 'isEnabled', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },

        ]);
    };
    const { data, error, isLoading } = useHeadquarters()
    const   headquarters = mapToOptionsType(data);

    return (
        <Crud
            handleClose={() => setOpen(false)}
            hideColumns={defaultVisibilityModel}
            formData={formData}
            open={open}
            fetchFunction={() => fetchResource('reading-config-default')}
            createFunction={() => createResource('reading-config-default')}
            updateFunction={() => updateResource('reading-config-default')}
            deleteFunction={() => deleteResource('reading-config-default')}
            formConfig={[
                // { name: 'id', class: "col-span-6", label: 'کد', type: 'input' },
                { name: 'nonReadDefault', class: "col-span-4", label: 'nonReadDefault', type: 'input' },
                { name: 'nonReadMax', class: "col-span-4", label: '', type: 'input' },
                { name: 'nonReadMin', class: "col-span-4", label: 'مانع', type: 'input' },

               
                { name: 'domesticLowConstBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'domesticLowPercentBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'domesticHighConstBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'domesticHighPercentBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'constructionLowConstBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'constructionLowPercentBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'constructionHighConstBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'constructionHighPercentBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'contractualCapacityLowConstBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'contractualCapacityLowPercentBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'contractualCapacityHighConstBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'contractualCapacityHighPercentBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'nonDomesticLowPercentRateBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'nonDomesticHighPercentRateBound', class: "col-span-4", label: '', type: 'input' },
                { name: 'headquartersId', class: "col-span-12 xl:col-span-4", label: 'نام شرکت', type: 'select', options: headquarters ?? [] },
                { name: 'preNumberDisplayOption', class: "col-span-4", label: '', type: 'checkbox', options:  [{ value: true, label: "preNumberDisplayOption" }] },
                { name: 'billIdDisplayOption', class: "col-span-4", label: '', type: 'checkbox', options:  [{ value: true, label: "preNumberDisplayOption" }] },
                { name: 'customerNumberDisplayOption', class: "col-span-4", label: '', type: 'checkbox', options:  [{ value: true, label: "preNumberDisplayOption" }] },
                { name: 'preDateDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
                { name: 'mobileDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
                { name: 'debtDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
                { name: 'iconsDisplayOption', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },
                { name: 'isEnabled', class: "col-span-4", label: 'فعال', type: 'checkbox', options: [{ value: true, label: "فعال" }] },


            ]}
            title={"ایجاد تنظیمات پیش فرض "}
            columns={[
                ...[ID(10), 
                    { field: 'nonReadDefault', headerName: 'علی‌الحساب پیشفرض', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'nonReadMax', headerName: 'علی‌الحساب بیشینه', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'nonReadMin', headerName: 'علی‌الحساب کمینه', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'preNumberDisplayOption', headerName: 'preNumberDisplayOption', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'billIdDisplayOption', headerName: 'billIdDisplayOption', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'customerNumberDisplayOption', headerName: 'customerNumberDisplayOption', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'domesticLowConstBound', headerName: 'domesticLowConstBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'domesticLowPercentBound', headerName: 'domesticLowPercentBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'domesticHighConstBound', headerName: 'domesticHighConstBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'domesticHighPercentBound', headerName: 'domesticHighPercentBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'constructionLowConstBound', headerName: 'constructionLowConstBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'constructionLowPercentBound', headerName: 'constructionLowPercentBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'constructionHighConstBound', headerName: 'constructionHighConstBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'constructionHighPercentBound', headerName: 'constructionHighPercentBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'contractualCapacityLowConstBound', headerName: 'contractualCapacityLowConstBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'contractualCapacityLowPercentBound', headerName: 'contractualCapacityLowPercentBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'nonDomesticHighPercentRateBound', headerName: 'nonDomesticHighPercentRateBound', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'preDateDisplayOption', headerName: 'تاریخ قبلی', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'mobileDisplayOption', headerName: 'موبایل', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'debtDisplayOption', headerName: 'debtDisplayOption', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'iconsDisplayOption', headerName: 'آیکن', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'headquartersId', headerName: 'headquartersId', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'headquartersTitle', headerName: 'شرکت', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    // { field: '', headerName: '', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
                    { field: 'isEnabled', headerName: 'فعال', width: 150, align: "center", headerAlign: "center", sortable: true }  ,
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

export default Default
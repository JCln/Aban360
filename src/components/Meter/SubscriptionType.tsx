import { ID, TITLE } from '../Table/Columns';
import { icons } from '../Icons/Icons';
import { useState } from "react";
import {fetchSubscriptionType, createSubscriptionType, updateSubscriptionType, deleteSubscriptionType } from '../../api/Meter/index';
import Crud from '../Data/Crud';

const SubscriptionType = () => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(false);
    const defaultVisibilityModel = { id: false };
    const handleEditClick = (cellValues: any) => {
        setOpen(true);
        setFormData([
            { name: 'id', type: 'input', class: "hidden", inputType: "hidden", value: `${cellValues?.id}` },
            { name: 'title', class: "col-span-8", label: 'عنوان', type: 'input', value: `${cellValues?.row?.title}` },
        ]);
    };
    return (
            <Crud
                handleClose={() => setOpen(false)}
                hideColumns={defaultVisibilityModel}
                formData={formData}
                open={open}
                fetchFunction={fetchSubscriptionType}
                createFunction={createSubscriptionType}
                updateFunction={updateSubscriptionType}
                deleteFunction={deleteSubscriptionType}
                formConfig={[
                    { name: 'id', class: "col-span-6", label: 'کد', type: 'input' },
                    { name: 'title', class: "col-span-6", label: 'عنوان', type: 'input' },
                ]}
                title={"ایجاد  نوع اشتراک کنتور "}
                columns={[
                    ...[ID(10), TITLE(400)],
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

export default SubscriptionType;

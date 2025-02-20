
import { FC, useEffect } from 'react';
import ModalComponent from '../Common/ModalComponent';
import GenericForm, { FormField } from './GenericForm';
import { toast } from 'react-toastify';

interface Props {
    title: string,
    formConfig: FormField[],
    apiFunction: (data: any) => Promise<any>;
    handleClose?: () => void
    open?: boolean
}

const EditComponent: FC<Props> = ({ formConfig, title, apiFunction, handleClose, open }) => {
    useEffect(() => {
    }, [formConfig,])
    const onSubmit = (data: any) => {
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (typeof data[key] === 'object' && data[key] !== null && 'id' in data[key] && 'label' in data[key] && 'value' in data[key]) {
                    newData[key] = data[key].id;
                } else if (key === 'id')
                    newData[key] = Number(data[key])
                else {
                    newData[key] = data[key];
                }
            }
        }
        apiFunction(newData).then(res => {
            if (res?.data) {
                toast(res.successMessage ?? "با موفقیت انجام شد", { type: 'success' })
                handleClose()
                setInterval(function () {
                    window.location.reload()
                }, 1000)
            }
            else
                toast("error", { type: 'error' })
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <ModalComponent
            handleClose={handleClose}
            show={open}
            title={title ?? ""}
            classWidth="xl:w-2/4 md:w-3/4 w-full mx-auto"
        >
            <GenericForm formConfig={formConfig} onSubmit={onSubmit} />
        </ModalComponent>
    );
};
export default EditComponent
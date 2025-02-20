import { useForm } from 'react-hook-form';
import { CustomCheckbox, CustomInput, CustomSelect } from './FormComponents';
import { FormProvider } from 'react-hook-form';
import { ReactComponent as Loader } from '../../assets/images/loader.svg'
import { useState } from 'react';

export interface FormField {
    label?: string;
    name?: string;
    type?: string;
    value?: string;
    class?: string;
    inputType?: string
    options?: any,
    defaultValue?:any
}

interface GenericFormProps<T> {
    formConfig: FormField[];
    onSubmit: (data: any) => void;
}

const GenericForm = <T extends Record<string, any>>({
    formConfig,
    onSubmit,
}: GenericFormProps<T>) => {
    const methods = useForm()
    const [loading, setLoading] = useState(false)
    const onClick = (data: any) => {
        setLoading(true)
        onSubmit(data)
    }
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onClick)} dir='rtl' >
                <div className="grid grid-cols-12 gap-4">
                    {formConfig.map((field, index) => {
                        switch (field.type) {
                            case 'input':
                                return (
                                    <div className={`my-1 ${field.class}`} key={index}>
                                        <CustomInput
                                            key={field.name}
                                            name={field.name}
                                            type={field.inputType}
                                            placeholder={field.label}
                                            borderStyle="bottom"
                                            defaultValue={field?.value}
                                        />
                                    </div>
                                );
                            case 'select':
                                return (
                                    <div className={`my-1 ${field.class}`}  key={index}>
                                        <CustomSelect
                                            key={field.name}
                                            name={field.name}
                                            options={field.options}
                                            placeholder={field.label}
                                            borderStyle="bottom"
                                            classNamePrefix="border-none"
                                            defaultValue={field?.defaultValue}
                                        />
                                    </div>
                                );
                            case 'checkbox':
                                return (
                                    <div className={`my-1 ${field.class}`} key={index}>
                                        <CustomCheckbox
                                            key={field.name}
                                            label={field?.label}
                                            name={field.name}
                                            options={field?.options}
                                        />
                                    </div>
                                );
                            default:
                                return null;
                        }
                    })}
                    <div className="col-span-12 flex justify-start">
                        <button
                            type="submit"
                            className="bg-blue hover:bg-blue text-center  md:w-1/4 xl:w-1/4 xl:col-span-3  md:col-span-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {!loading ? ' ثبت و ذخیره' : <Loader className="spinner spinner-btn" />}
                        </button>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default GenericForm;

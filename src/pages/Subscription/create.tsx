import React from 'react'
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
// import { CustomCheckbox, CustomInput, CustomSelect } from '../../components/Form/FormComponents';
import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from '../../components/Common/BreadCrumb';
// import SelectEndpoints from '../../components/ServicePermissions/SelectEndpoints';
import { path } from '../../config/path';
import { createUser } from '../../api/User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../components/Form/GenericForm';
import { icons } from '../../components/Icons/Icons';


const formStep1 =
  [
    { name: 'type', class: "col-span-12 xl:col-span-4", label: 'نوع شخصیت ', type: 'select', options: [] },
    { name: 'status', class: "col-span-12 xl:col-span-4", label: 'وضعیت', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'شغل', type: 'select', options: [] },
    { name: 'capcity', class: "col-span-12 xl:col-span-4", label: 'ظرفیت قراردادی', type: 'select', options: [] },
    { name: 'premises', class: "col-span-12 xl:col-span-4", label: 'عرصه', type: 'input' },
    { name: 'address', class: "col-span-12 xl:col-span-12", label: 'ادرس', type: 'textarea' },
  ]
const formStep2Configs =
  [
    { name: 'type', class: "col-span-12 xl:col-span-4", label: 'نوع سازه', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'کاربری', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'شغل', type: 'select', options: [] },
    { name: 'capcity', class: "col-span-12 xl:col-span-4", label: 'ظرفیت قراردادی', type: 'select', options: [] },
    { name: 'premises', class: "col-span-12 xl:col-span-4", label: 'عرصه', type: 'input' },
    { name: 'address', class: "col-span-12 xl:col-span-12", label: 'ادرس', type: 'textarea' },
  ]

const formStep3Configs =
  [
    { name: 'type', class: "col-span-12 xl:col-span-4", label: 'نوع سازه', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'کاربری', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'شغل', type: 'select', options: [] },
    { name: 'capcity', class: "col-span-12 xl:col-span-4", label: 'ظرفیت قراردادی', type: 'select', options: [] },
    { name: 'premises', class: "col-span-12 xl:col-span-4", label: 'عرصه', type: 'input' },
    { name: 'address', class: "col-span-12 xl:col-span-12", label: 'ادرس', type: 'textarea' },
  ]
const formStep4 =
  [
    { name: 'type', class: "col-span-12 xl:col-span-4", label: 'نوع سازه', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'کاربری', type: 'select', options: [] },
    { name: 'usage', class: "col-span-12 xl:col-span-4", label: 'شغل', type: 'select', options: [] },
    { name: 'capcity', class: "col-span-12 xl:col-span-4", label: 'ظرفیت قراردادی', type: 'select', options: [] },
    { name: 'premises', class: "col-span-12 xl:col-span-4", label: 'عرصه', type: 'input' },
    { name: 'address', class: "col-span-12 xl:col-span-12", label: 'ادرس', type: 'textarea' },
  ]
function Step5() {
  return (
    <div>آیا از افزودن اشتراک جدید اطمینان دارید ؟</div>
  )
}
const Page = () => {
  const steps = ['اطلاعات مالک', 'اطلاعات ملک', 'اطلاعات کنتور', 'اطلاعات سیفون', 'ذخیره'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [formStep1Configs, setFormStep1Configs] = React.useState([[...formStep1]]);
  // const [formStep2Configs, setFormStep2Configs] = React.useState([[...formStep2]]);
  // const [formStep3Configs, setFormStep3Configs] = React.useState([[...formStep3]]);
  const [formStep4Configs, setFormStep4Configs] = React.useState([[...formStep4]]);
  // const navigate = useNavigate();
  const methods = useForm();

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handlePlusClick = () => {
    if (activeStep === 0) {
      setFormStep1Configs([...formStep1Configs, [...formStep1]]);

    } else if (activeStep === 3) {
      setFormStep4Configs([...formStep4Configs, [...formStep4]]);
    }
  };

  const handleUndoClick = () => {
    if (activeStep === 0 && formStep1Configs.length > 1) {
      setFormStep1Configs(formStep1Configs.slice(0, -1));
    } else if (activeStep === 3 && formStep4Configs.length > 1) {
      setFormStep4Configs(formStep4Configs.slice(0, -1));
    }
  };

  const onSubmit = (data: any) => {

  };

  return (
    <DefaultLayout>
      <div className="user-create-page container mx-auto">
        <Breadcrumb items={[{ label: "ثبت اشنراک" }]} />

        <FormProvider {...methods}>
          <form>
            <Box>
              <Stepper activeStep={activeStep} className='bg-white border-gray border-1 rounded-xl py-3 px-2 '>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};

                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {(activeStep === 0 || activeStep === 3) && (
                <div className="bg-white rounded-xl my-1 p-2 ">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-1 grid grid-cols-3 gap-1">
                      <div className="col-span-1 cursor-pointer" onClick={handlePlusClick} >
                        <img src={icons.plus} alt="PDF Icon" />
                      </div>
                      <div className="col-span-1 cursor-pointer">
                        <img src={icons.saveop} alt="Save Icon" />
                      </div>
                      <div className="col-span-1 cursor-pointer" onClick={handleUndoClick} >
                        <img src={icons.redo} alt="Excel Icon" />
                      </div>
                    </div>
                  </div>
                </div>)}
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    پایان
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <div className="bg-white py-8 px-3 rounded-xl mt-5">
                  <React.Fragment>
                    {activeStep === 0 && (
                      <>
                        {formStep1Configs.map((formConfig, index) => (
                          <GenericForm key={index} formConfig={formConfig} />
                        ))}
                      </>
                    )}
                    {activeStep === 1 && (
                      <>
                        <GenericForm formConfig={formStep2Configs} />
                      </>
                    )}
                    {activeStep === 2 && (
                      <>
                        <GenericForm formConfig={formStep3Configs} />
                      </>
                    )}
                    {activeStep === 3 && (
                      <>
                        {formStep4Configs.map((formConfig, index) => (
                          <GenericForm key={index} formConfig={formConfig} />
                        ))}
                      </>
                    )}
                    {activeStep === 4 && <Step5 />}

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: "100%", justifyContent: "flex-end" }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ ml: 1, backgroundColor: "gray", color: "#fff", "&:hover": { backgroundColor: "primary.main" } }}
                      >
                        بازگشت
                      </Button>
                      <Button
                        sx={{ backgroundColor: "primary.main", color: "#fff", "&:hover": { backgroundColor: "primary.main" } }}
                        onClick={activeStep === steps.length - 1 ? methods?.handleSubmit(onSubmit) : handleNext}>
                        {activeStep === steps.length - 1 ? 'ثبت و ذخیره' : 'بعدی'}
                      </Button>

                    </Box>
                  </React.Fragment>
                </div>
              )}
            </Box>
          </form>
        </FormProvider>
      </div>
    </DefaultLayout>
  );
}

export default Page;

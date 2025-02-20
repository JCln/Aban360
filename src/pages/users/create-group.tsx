import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Loading from '../../components/Common/Loading';
import Breadcrumb from '../../components/Common/BreadCrumb';
import { path } from '../../config/path';
import { CustomCheckbox, CustomInput } from '../../components/Form/FormComponents';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { createRole } from '../../api/Roles';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SelectEndpoints from '../../components/ServicePermissions/SelectEndpoints';

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const steps = ['مشخصات گروه', 'سطح دسترسی به خدمات', 'ذخیره'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const navigate = useNavigate()

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const methods = useForm()

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function Step1() {
    return (
      <div className="grid grid-cols-12 gap-4">
        <CustomInput name="name" placeholder='نام' classNames='col-span-12 xl:col-span-4' />
        <CustomInput name="title" placeholder='عنوان' classNames='col-span-12 xl:col-span-4' />
        <CustomCheckbox name="sensitiveInfo" classNames='col-span-12 xl:col-span-4 my-auto' options={[{ value: "true", label: "sensitiveInfo" }]} />
      </div >
    );
  }

  function Step2() {
    return (
      <div className="w-full my-5">
        آیا از ثبت داده ها اطمینان دارید ؟
      </div >
    );
  }
  const onSubmit = (data: any) => {
    const selectedEndpointIds = Object.keys(data)
      .filter(key => key.startsWith('check_endpointId_'))
      .reduce((acc, key) => {
        if (data[key].length > 0) {
          acc = acc.concat(data[key]);
        }
        return acc;
      }, []);
    createRole({ name: data?.name, title: data?.title, selectedEndpointIds: selectedEndpointIds, sensitiveInfo: data?.sensitiveInfo }).then(res => {
      if (res.data) {
        toast(res.successMessage ?? "با موفقیت انجام شد", { type: 'success' })
        navigate(path?.groupManagementUsers)
      }
    }).catch(error => {
      toast("error", { type: 'error' })
      console.log(error)
    })
  }

  return (
    <DefaultLayout>
      <div className="management-page container mx-auto">
        {loading ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 loading">
            <Loading type={"spin"} color="#3856ac" />
          </div>
        ) : (
          ""
        )}
        <Breadcrumb items={[{ href: path?.management, label: "مدیریت" }, { href: path?.userManagement, label: "مدیریت کاربران" }, { href: path?.groupManagementUsers, label: "مدیریت گروه" }, { label: "افزودن گروه" }]} />

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
                <div className="bg-white py-8 px-3 rounded-xl mt-5"  >
                  <React.Fragment >
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                    {activeStep === 0 && <Step1 />}
                    {activeStep === 1 && <SelectEndpoints />}
                    {activeStep === 2 && <Step2 />}


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
};


export default Page
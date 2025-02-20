import React, { useEffect, useState } from 'react'
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { CustomCheckbox, CustomInput } from '../../components/Form/FormComponents';
import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from '../../components/Common/BreadCrumb';
import SelectEndpoints from '../../components/ServicePermissions/SelectEndpoints';
import { path } from '../../config/path';
import Roles from '../../components/ServicePermissions/Roles';
import Zone from '../../components/ServicePermissions/Zone';
import { createUser, fetchUser } from '../../api/User';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
type ParamType = {
  id?: string;
};
const Page = () => {
  const steps = ['مشخصات کاربر', 'دسترسی به ناحیه', 'سطح دسترسی به خدمات', 'گروه دسترسی', 'ذخیره'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const navigate = useNavigate()
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const methods = useForm()
  const [loading, setLoading] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>({})
  const { id } = useParams<ParamType>();

  // useEffect(() => {
  //   // setLoading(true)
  //   fetchUser(Number(id)).then(res => {
  //   }).catch(error => console.log(error))

  // }, [])
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



  function Step1() {
    return (
      <>
        <div className='grid grid-cols-4  gap-4'>
          <div className="col-span-1 pb-4">
            <CustomInput name="fullName" placeholder="نام و نام خانوداگی" type="text"
              borderStyle="bottom" inputClass="pr-15" defaultValue={userInfo?.fullName ?? ""} />
          </div>
          <div className="col-span-1 pb-4">
            <CustomInput name="username" placeholder="نام کاربری" type="text"
              borderStyle="bottom" inputClass="pr-15" />
          </div>
          <div className="col-span-1 pb-4">
            <CustomInput name="displayName" placeholder="نام نمایشی" type="text"
              borderStyle="bottom" inputClass="pr-15" />
          </div>
          <div className="col-span-1 pb-4">
            <CustomInput name="mobile" placeholder="شماره موبایل" type="text"
              borderStyle="bottom" inputClass="pr-15" />
          </div>
          <div className="col-span-1 pb-4">
            <CustomInput type="password" name="password" placeholder="گذرواژه"
              borderStyle="bottom" inputClass="pr-15" showPasswordToggle={true} />
          </div>
        </div>
        <div className='grid grid-cols-4  gap-4 my-5'>
          <div className="col-span-1 pb-4">
            <CustomCheckbox name="" options={[{ value: "1", label: "کاربر فعال باشد؟" }]} />
          </div>
        </div>
      </>

    );
  }

  function Step5() {
    return (
      <div>آیا از افزودن کاربر جدید اطمینان دارید ؟</div>
    )
  }
  const onSubmit = (data: any) => {
   
  }

  return (
    <DefaultLayout>
      <div className="user-create-page container mx-auto">
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { href: "/managemen/users", label: "مدیریت  کاربران" }, { label: "افزودن کاربر" }]} />
        <FormProvider {...methods}>
          <form>
            <Box>
              <Stepper activeStep={activeStep} className='bg-white border-gray border-1 rounded-xl py-3 px-2 '>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  const labelProps: {
                    optional?: React.ReactNode;
                  } = {};
                  // if (isStepOptional(index)) {
                  //   labelProps.optional = (
                  //     <Typography variant="caption">Optional</Typography>
                  //   );
                  // }
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
                    {activeStep === 1 && <Zone />}
                    {activeStep === 2 && <SelectEndpoints />}
                    {activeStep === 3 && <Roles />}
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
};


export default Page
import React, { useState } from 'react'
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { CustomCheckbox, CustomInput } from '../../components/Form/FormComponents';
import { FormProvider, useForm } from "react-hook-form";
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import CheckBoxArea from '../../components/Form/CheckBoxArea';
import AccordionComponent from '../../components/Form/AccordionComponent';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SelectEndpoints from '../../components/ServicePermissions/SelectEndpoints';

const Page = () => {
  const steps = ['گروه دسترسی', 'سطح دسترسی به خدمات', 'ذخیره'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const methods = useForm()

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

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const accordionData = [
    { id: 1, title: 'تهران' },
    { id: 2, title: 'اصفهان' },
  ];
  function Step2() {
    return (
      <>
        {accordionData && accordionData?.map((item, index) =>
          <div key={index}>
            <AccordionComponent
              content={<div className="bg-meta-9 rounded-tl-2xl rounded-tr-2xl p-2">
                <div className='p-2'>{item.title}</div>
                <CustomCheckbox classNames='bg-white rounded-tl-2xl rounded-tr-2xl grid grid-cols-6 w-full grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4' name={"area"} options={[{ value: "3", label: "منطقه ۳" }, { value: "1", label: "منطقه ۱" }]} />
              </div>}
              title={item.title}
            />
          </div>
        )}
      </>
    );
  }



  function Step1() {
    return (
      <div >
        <AccordionComponent
          content={<div className="bg-meta-9 rounded-tl-2xl rounded-tr-2xl p-2">
            <div className='p-2'>فهرست دسترسی ها </div>
            <CustomCheckbox
              classNames='bg-white rounded-tl-2xl rounded-tr-2xl grid grid-cols-6 w-full grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4'
              name={"permisions"}
              options={[{ value: "1", label: "راهبری سامانه" },
              { value: "2", label: "قرائت کنتور" },
              { value: "3", label: "معاونت مشترکین" },
              { value: "4", label: "ناظر قرائت" },
              { value: "5", label: "ناظر ستادی" },
              { value: "6", label: "ربات هوش مصنوعی" },
              { value: "7", label: "دسترسی محدود" },
              ]} />
          </div>}
          title={"فهرست دسترسی"}
        />
      </div>
    )
  }


  function Step3() {
    return (
      <div>گروه دسترسی راهبری سامانه با سطح دسترسی به فروش ویرایش شود ؟</div>
    )
  }

  return (
    <DefaultLayout>
      <div className="user-create-page container mx-auto">
        <Breadcrumb items={[{ href: "/managemen", label: "مدیریت" }, { href: "/managemen/users", label: "مدیریت  کاربران" }, { label: " ویرایش گروهی" }]} />
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
                    {activeStep === 1 && <SelectEndpoints />}

                    {activeStep === 2 && <Step3 />}

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
                        onClick={handleNext}>
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
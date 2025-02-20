import { faSignInAlt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import ImgLogo from '../../assets/images/signin.jpg'
import { FormProvider, useForm } from "react-hook-form";
import { BooleanSwitch, CustomInput } from "../../components/Form/FormComponents";
import ButtonComponent from "../../components/Form/ButtonComponent";
import { CaptchaInput } from "../../components/Form/CaptchaInput";
import { fetchCaptcha, signinUser } from "../../api/auth/auth";
import { useAuth } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
import { useState } from "react";

const Page = () => {
  const methods = useForm()
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);

  const onSubmit = (data: any) => {
    setShowLoader(true)
    signinUser(data).then(res => {
      if (res?.data && res.success === true) {
        let accessToken = res?.data?.accessToken
        login(accessToken)
        localStorage.setItem('authToken', accessToken)
        navigate('/dashboard')
        setShowLoader(false)
        // let refreshToken = res?.data?.refreshToken
      }
      else {
        setShowLoader(false)
        toast("نام کاربری  و یا رمز عبور اشتباه است", { type: "error" })
      }
    }).catch(error => {
      setShowLoader(false)
      toast(error?.response?.data.errors[0]?.message ?? "خطا", { type: "error" })
    }
    )
  }
  const handleCaptchaChange = (value: string, captchaId: string) => {
    console.log('Captcha value:', value, 'Captcha ID:', captchaId);
  };


  return (
    <main className="login signin">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 bg-white rounded-lg shadow-lg">
          <FormProvider {...methods}>
            <form>
              <div className="p-20 space-y-6">
                <div className="py-5 text-center">
                  <div className="text-8xl title-nastaliq text-center text-gray py-5">سامانه مشترکین آبفا </div>
                </div>
                <div className="pb-4">
                  <CustomInput name="username" placeholder="نام کاربری" type="text" icon={faUser}
                    borderStyle="bottom" inputClass="pr-15" />
                </div>
                <div className="pb-4">
                  <CustomInput name="password" borderStyle="bottom" placeholder="کلمه عبور " type="password" icon={faLock} showPasswordToggle={true} />
                </div>

                <div className="grid grid-cols-2 gap-4 items-center">
                  {/* Save User Toggle */}
                  <div className="text-right">
                    <BooleanSwitch name="save" label="ذخیره کاربر" />
                  </div>
                </div>
                <CaptchaInput fetchCaptcha={fetchCaptcha} onChange={handleCaptchaChange} />
                <ButtonComponent
                  title="ورود"
                  loading={showLoader}
                  disabled={showLoader}
                  icon={faSignInAlt}
                  className={'bg-blue'}
                   handleClick={methods.handleSubmit(onSubmit)} />
              </div>
            </form>
          </FormProvider>
          <div className="flex items-center justify-center bg-gray-200">
            <img
              src={ImgLogo}
              alt="abfa"
              height={259}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* {loading ? (
        <div className="loading">
          <Loading type={"bars"} color="#3856ac" />
        </div>
      ) : (
        ""
      )} */}

    </main>
  );
};


export default Page
import { faSignInAlt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import ImgLogo from '../../assets/images/signin.jpg'
import { FormProvider, useForm } from "react-hook-form";
import { BooleanSwitch, CustomInput } from "../../components/Form/FormComponents";
import ButtonComponent from "../../components/Form/ButtonComponent";
import { CaptchaInput } from "../../components/Form/CaptchaInput";
import { fetchCaptcha, signinUser } from "../../api/auth/auth";
import { useAuth } from "../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useState } from "react";

const Page = () => {
  const methods = useForm()
  const { login } = useAuth();
  const navigate = useNavigate();
  const [refreshCaptcha, setRefreshCaptcha] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const onSubmit = (data: any) => {
    setShowLoader(true)
    signinUser(data).then(res => {
      if (res?.data && res.success === true) {
        let accessToken = res?.data?.accessToken
        // Decode the JWT token
        const decodedToken = jwtDecode(accessToken);
        login(accessToken)
        localStorage.setItem('authToken', accessToken)
        localStorage.setItem('decodedToken', JSON.stringify(decodedToken))
        navigate('/dashboard')
        setShowLoader(false)
      }
      else {
        setShowLoader(false)
        setRefreshCaptcha(true);
        toast("نام کاربری  و یا رمز عبور اشتباه است", { type: "error" })
      }
    }).catch(error => {
      setShowLoader(false)
      setRefreshCaptcha(true);
      toast(error?.response?.data.errors[0]?.message ?? "خطا", { type: "error" })
    }
    )
  }

  const resetCaptchaRefresh = () => {
    setRefreshCaptcha(false);
  };

  return (
    <main className="login signin">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:w-3/5 bg-white rounded-lg ">
          <div className="px-26 py-17.5 text-center shadow-lg">
            <FormProvider {...methods}>
              <form>
                <div className="p-10 space-y-5">
                  <div className="py-5 text-center">
                    <div className="text-8xl title-nastaliq text-center text-gray py-5">سامانه مشترکین آبفا </div>
                  </div>
                  <div className="pb-4">
                    <CustomInput name="username" placeholder="نام کاربری" type="text" icon={faUser}
                      borderStyle="bottom" labelClass="pr-4" />
                  </div>
                  <div className="pb-4">
                    <CustomInput labelClass="pr-4"
                      name="password" borderStyle="bottom"
                      placeholder="کلمه عبور " type="password" icon={faLock} showPasswordToggle={true} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 items-center">
                    {/* Save User Toggle */}
                    <div className="text-right">
                      <BooleanSwitch name="save" label="ذخیره کاربر" />
                    </div>
                  </div>
                  <CaptchaInput fetchCaptcha={fetchCaptcha} refreshCaptcha={refreshCaptcha} resetCaptchaRefresh={resetCaptchaRefresh} />
                  <ButtonComponent
                    title="ورود"
                    loading={showLoader}
                    disabled={showLoader}
                    icon={faSignInAlt}
                    className={'bg-blue h-12'}
                    handleClick={methods.handleSubmit(onSubmit)} />
                </div>
              </form>
            </FormProvider>
          </div>
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
    </main>
  );
};


export default Page
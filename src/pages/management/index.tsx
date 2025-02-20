import { useEffect, useState } from 'react'
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Loading from '../../components/Common/Loading';
import { icons } from '../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import { path } from '../../config/path';
import Breadcrumb from '../../components/Common/BreadCrumb';

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
 
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
        <Breadcrumb items={[{ label: "مدیریت" }]} />
        <div className="bg-white p-5 rounded-xl p-5">
          <div className="grid xl:grid-cols-5 md:grid-cols-8 grid-cols-12 bg-white mx-20 w-8/12 mx-auto">
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16 cursor-pointer" onClick={() => navigate(path.basicManagement)}>
              <img src={icons.settings} alt="" width={130} className='border-primary-blue border-2 p-4  width-full h-full rounded-2xl' />
              <div className='text-center text-16 my-3 text-primary-blue font-bold'>تعاریف اولیه</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" onClick={() => navigate(path.tarifsManagement)}>
              <img src={icons.tariffs} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>تعرفه ها</div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2  width-130 h-130 mb-16  cursor-pointer" onClick={() => navigate(path.testTarfiManagement)}>
              <img src={icons.tariffstest} alt="" className='border-primary-blue border-2 p-4 h-full w-full rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>تست تعرفه‌ها</div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2  width-130 h-130 mb-16 cursor-pointer" onClick={() => navigate(path.messagesManagement)}>
              <img src={icons.messages} alt="" width={150} className='border-primary-blue h-full  w-full border-2 p-4 rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>مدیریت پیامک ها  </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2  width-130 h-130 mb-16  cursor-pointer" onClick={() => navigate(path.userManagement)}>
              <img src={icons.users} alt="" width={150} className='border-primary-blue border-2 p-4  h-full  w-full rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>مدیریت کاربران </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" onClick={() => navigate(path.permissionsManagement)}>
              <img src={icons.permissions} alt="" width={150} className='border-primary-blue border-2  h-full  w-full p-4 rounded-2xl' />
              <div className='text-center my-3text-16  text-primary-blue font-bold'>درخت دسترسی   </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2  width-130 h-130 mb-16 cursor-pointer " onClick={() => navigate(path.captchaManagement)}>
              <img src={icons.secure} alt="" width={150} className='border-primary-blue border-2 p-4  h-full  w-full rounded-2xl' />
              <div className='text-center my-3 text-16  text-primary-blue font-bold'>تصویر امنیتی    </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 cursor-pointer width-130 h-130 mb-16" onClick={() => navigate(path.districtsManagement)}>
              <img src={icons.districts} alt="" width={150} className='border-primary-blue border-2 h-full  w-full  p-4 rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>مدیریت نواحی     </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 cursor-pointer width-130 h-130 mb-16" onClick={() => navigate(path.propertyManagement)}>
              <img src={icons.homeBlue} alt="" width={150} className='border-primary-blue border-2 h-full  w-full  p-4 rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>ملک      </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 cursor-pointer width-130 h-130 mb-16" onClick={() => navigate(path.peopleManagement)}>
              <img src={icons.userIcon} alt="" width={150} className='border-primary-blue border-2 h-full  w-full  p-4 rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>   اشخاص   </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 cursor-pointer width-130 h-130 mb-16" onClick={() => navigate(path.meterManagement)}>
              <img src={icons.counterBlue} alt="" width={150} className='border-primary-blue border-2 h-full  w-full  p-4 rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>    کنتور  </div>
            </div>
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 cursor-pointer width-130 h-130 mb-16" onClick={() => navigate(path.siphonManagement)}>
              <img src={icons.syphoneBlue} alt="" width={150} className='border-primary-blue border-2 h-full  w-full  p-4 rounded-2xl' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>   سیفون   </div>
            </div>
          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default Page
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
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])
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
        <Breadcrumb items={[{ label: "ثبت نشان (Logs)" }]} />
        <div className="bg-white p-5 rounded-xl p-5">
          <div className="grid xl:grid-cols-5 md:grid-cols-8 grid-cols-12 bg-white mx-20 w-8/12 mx-auto">
            <div className="col-span-6 md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16 cursor-pointer" >
              <img src={icons.note} alt="" width={130} className='border-primary-blue border-2 p-4  width-full h-full rounded-2xl' />
              <div className='text-center text-16 my-3 text-primary-blue font-bold'> همه درخواست ها</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.securotyUser} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> درخواست کاربر</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.warning} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> خطاهای فنی</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.account} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>حساب کاربری </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer">
              <img src={icons.history} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>تاریخچه تنظیمات امنیتی </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer">
              <img src={icons.groups} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>تاریخچه مدیریت گروه </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.users} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>تاریخچه کاربران </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer">
              <img src={icons.login} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>ورودهای کاربران </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.securityMessages} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>لیست پیام‌ها </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer">
              <img src={icons.securityIp} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> IP های بلاک شده</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.filterIp} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> تاریخچه فیلتر IP</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.databaseNetwork} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> تاریخچه ورودی خروجی داده</div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.monitor} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>موجودیتهای غیرفعال </div>
            </div>

            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.documentCode} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>خطاهای پشتیبان </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.download} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> تلاش های دانلود</div>
            </div>

            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.upload} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> آپلود ناموفق  </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.uploadSuccess} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>آپلود های موفق  </div>
            </div>

            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.system} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'>  خارج از زمان  </div>
            </div>
            <div className="col-span-6  md:col-span-2 xl:col-span-1 mx-auto my-2 width-130 h-130 mb-16  cursor-pointer" >
              <img src={icons.request} alt="" className='border-primary-blue border-2 p-4 rounded-2xl w-full h-full' />
              <div className='text-center my-3 text-16 text-primary-blue font-bold'> درخواست های غیرمجاز   </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page
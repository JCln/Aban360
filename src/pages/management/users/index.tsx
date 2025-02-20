import React, { useEffect, useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../..//components/Common/Loading';
import { icons } from '../../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../config/path';
import Breadcrumb from '../../../components/Common/BreadCrumb';

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // setLoading()
  })
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
        <Breadcrumb items={[{ href: "/managemen", label: "مدیریت" }, { label: "مدیریت کاربران" }]} />

        <div className="bg-white p-5 rounded-xl p-5">
          <div className="grid grid-cols-4 bg-white mx-20 w-8/12 mx-auto">
            <div className="col-span-1 mx-auto my-2">
              <img src={icons.viewAll} alt="" width={150} className='border-primary-blue border-2 p-4 rounded-2xl cursor-pointer' onClick={() => navigate(path.allUsers)} />
              <div className='text-center my-3 text-primary-blue font-bold'>مشاهده همه</div>
            </div>
            <div className="col-span-1 mx-auto my-2 cursor-pointer" onClick={() => navigate(path?.userCreate)}>
              <img src={icons.addUser} alt="" width={150} className='border-primary-blue border-2 p-4 rounded-2xl' />
              <div className='text-center my-3 text-primary-blue font-bold'>افزودن کاربر </div>
            </div>
            <div className="col-span-1 mx-auto my-2 cursor-pointer">
              <img src={icons.userGroup} alt="" width={150} className='border-primary-blue border-2 p-4 rounded-2xl' onClick={() => navigate(path?.groupManagementUsers)} />

              <div className='text-center my-3 text-primary-blue font-bold'>مدیریت گروه</div>
            </div>
            <div className="col-span-1 mx-auto my-2 cursor-pointer">
              <img src={icons.editUser} alt="" width={150} className='border-primary-blue border-2 p-4 rounded-2xl'  />
              <div className='text-center my-3 text-primary-blue font-bold'>ویرایش گروهی </div>
            </div>
            <div className="col-span-1 mx-auto my-2 cursor-pointer">
              <img src={icons.userSearch} alt="" width={150} className='border-primary-blue border-2 p-4 rounded-2xl' />
              <div className='text-center my-3 text-primary-blue font-bold'>جستجوی کاربر </div>
            </div>
            <div className="col-span-1 mx-auto my-2 cursor-pointer">
              <img src={icons.userOnline} alt="" width={150} className='border-primary-blue border-2 p-4 rounded-2xl' />
              <div className='text-center my-3 text-primary-blue font-bold'> کاربران آنلاین</div>
            </div>
          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
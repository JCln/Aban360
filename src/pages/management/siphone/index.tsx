import { useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../../components/Common/BreadCrumb';
import { path } from '../../../config/path'
import CardWithTabs from '../../../components/Common/CardWithTabs';
import SiphoneMaterial from '../../../components/Siphone/Material';
import Diameter from '../../../components/Siphone/Diameter';
import SiphoneType from '../../../components/Siphone/SiphonType';
const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const tabs = [
    {
      label: "نوع سیفون",
      content: <SiphoneType />
    },
    {
      label: "جنس سیفون",
      content: <SiphoneMaterial />
    },

    {
      label: "قطر سیفون",
      content: <Diameter />
    },

  ];

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
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "سیفون" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
import { useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
import Breadcrumb from '../../../components/Common/BreadCrumb';
import { path } from '../../../config/path'
import CardWithTabs from '../../../components/Common/CardWithTabs';
import ConstructionType from '../../../components/Property/ConstructionType';
import Usage from '../../../components/Property/Usage';
const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const tabs = [
    {
      label: "نوع سازه",
      content: <ConstructionType />
    },
    {
      label: "کاربری",
      content: <Usage />
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
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "ملک" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
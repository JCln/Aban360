import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Breadcrumb from '../../../components/Common/BreadCrumb';
import { path } from '../../../config/path'
import CardWithTabs from '../../../components/Common/CardWithTabs';
const Page = () => {
  const tabs = [
    {
      label: "تنظیمات پیشفرض",
      content: ""
    },
    {
      label: "وضعیت کنتور",
      content: ""
    },
    {
      label: "نوع دوره قرائت",
      content: ""
    },
    {
      label: "دوره قرائت",
      content: ""
    },
  ];

  return (
    <DefaultLayout>
      <div className="management-page container mx-auto">
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "مدیریت قرائت" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />
        </div>
      </div>
    </DefaultLayout>
  );
};


export default Page
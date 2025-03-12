import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Breadcrumb from '../../../components/Common/BreadCrumb';
import { path } from '../../../config/path'
import CardWithTabs from '../../../components/Common/CardWithTabs';
import Default from "../../../components/Reading/Default";
import State from "../../../components/Reading/Sate";
import Period from "../../../components/Reading/Period";
import Type from "../../../components/Reading/Type";
const Page = () => {
  const tabs = [
    {
      label: "تنظیمات پیشفرض",
      content: <Default />
    },
    {
      label: "وضعیت کنتور",
      content: <State />
    },
    {
      label: "نوع دوره قرائت",
      content: <Type />
    },
    {
      label: "دوره قرائت",
      content: <Period />
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
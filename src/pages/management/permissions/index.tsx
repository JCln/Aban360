import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import CardWithTabs from '../../../components/Common/CardWithTabs';
import Breadcrumb from '../../../components/Common/BreadCrumb';
import ModuleContent from '../../../components/ServicePermissions/Module';
import Endpoint from '../../../components/ServicePermissions/Endpoint';
import SubModule from '../../../components/ServicePermissions/SubModule';
import App from '../../../components/ServicePermissions/App';
import {path} from '../../../config/path'

const Page = () => {
  const tabs = [
    {
      label: "App ها",
      content: <App />
    },
    {
      label: "ماژول ها",
      content: <ModuleContent />
    },

    {
      label: "کنترلر ها",
      content: <SubModule />
    },
    {
      label: "اکشن ها",
      content: <Endpoint />
    },
  ];

  return (
    <DefaultLayout>
      <div className="management-page container mx-auto">
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "درخت دسترسی " }]} />

        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
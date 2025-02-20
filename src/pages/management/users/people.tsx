import { useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
import Breadcrumb from '../../../components/Common/BreadCrumb';
import { path } from '../../../config/path'
import CardWithTabs from '../../../components/Common/CardWithTabs';
import IndividualEstateRelationType from '../../../components/People/IndividualEstateRelationType';
import IndividualType from '../../../components/People/IndividualType';
const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const tabs = [
    {
      label: "وضعیت اشخاص",
      content: <IndividualEstateRelationType/>
    },
    {
      label: "نوع شخصیت",
      content: <IndividualType/>
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
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "اشخاص" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
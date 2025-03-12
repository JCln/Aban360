
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Loading from '../../components/Common/Loading';
import Breadcrumb from '../../components/Common/BreadCrumb';
import CardWithTabs from '../../components/Common/CardWithTabs';
import { path } from '../../config/path';
import Offering from '../../components/Services/Offering';
import OfferingGroup from '../../components/Services/OfferingGroup';
import OfferingUnit from '../../components/Services/OfferingUnit';
import Service from '../../components/Services/Service';
import OfferingSerivce from '../../components/Services/OfferingSerivce';
import Type from '../../components/Services/Type';
const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  const tabs = [
    {
      label: "گروه خدمات",
      content: <Type />
    },
    {
      label: "خدمات",
      content: <Service />
    },
    {
      label: "واحد اقلام ",
      content: <OfferingUnit />
    },
    {
      label: "گروه اقلام ",
      content: <OfferingGroup />
    },
    {
      label: "اقلام ",
      content: <Offering />
    },
    {
      label: "خدمات اقلام ",
      content: <OfferingSerivce />
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
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "خدمات" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='650px' />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
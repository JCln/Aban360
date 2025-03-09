
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import Loading from '../../components/Common/Loading';
import Breadcrumb from '../../components/Common/BreadCrumb';
import CardWithTabs from '../../components/Common/CardWithTabs';
import { path } from '../../config/path';
import InvoiceType from '../../components/Invoice/InvoiceType';
import InvoiceInsertMode from '../../components/Invoice/InvoiceInsertMode';
import InvoiceStatus from '../../components/Invoice/InvoiceStatus';
const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // setLoading()
  })

  const tabs = [
    {
      label: "مدیریت صورتحساب",
      content: <InvoiceInsertMode />
    },
    {
      label: "وضعیت صورتحساب ",
      content: <InvoiceStatus />
    },
    {
      label: "انواع صورتحساب ",
      content: <InvoiceType />
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
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "صورتحساب" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='650px' />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
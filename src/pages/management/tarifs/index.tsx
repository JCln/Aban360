import React, { useEffect, useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
import { icons } from '../../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import CardWithTabs from '../../../components/Common/CardWithTabs';
import SearchForm from '../../../components/Search';
import { DatailGridComponent } from '../../../components/Common/DataGridComponent';
import { GridColDef } from '@mui/x-data-grid';
import Breadcrumb from '../../../components/Common/BreadCrumb';

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // setLoading()
  })

  const tabs = [
    {
      label: "فرمول های تعرفه",
      content: ""
    },
    {
      label: "ضرایب تعرفه",
      content: ""
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

        <Breadcrumb items={[{ href: "/managemen", label: "مدیریت" }, { label: "تعرفه ها" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} />
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
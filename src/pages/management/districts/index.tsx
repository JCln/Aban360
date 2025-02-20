import React, { useEffect, useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
import { icons } from '../../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import CardWithTabs from '../../../components/Common/CardWithTabs';
import SearchForm from '../../../components/Search';
import { DatailGridComponent, useColumnVisibilityModel } from '../../../components/Common/DataGridComponent';
import { GridColDef } from '@mui/x-data-grid';
import Breadcrumb from '../../../components/Common/BreadCrumb';
import ActionBar from '../../../components/Management/ActionBar';
import { ARROW, ID, TITLE } from '../../../components/Table/Columns';
import Country from '../../../components/Districts/Country';
import CordinalDirection from '../../../components/Districts/CordinalDirection';
import Province from '../../../components/Districts/Province';
import Headquarters from '../../../components/Districts/Headquarters';
import Zone from '../../../components/Districts/Zone';
import ReadingBound from '../../../components/Districts/ReadingBound';
import ReadingBlock from '../../../components/Districts/ReadingBlock ';
import Region from '../../../components/Districts/Region';
import Municipality from '../../../components/Districts/Municipality';

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // setLoading()
  })
  const countryRows = [
    { id: 1, title: "تهران" }
  ]
  const defaultVisibilityModel = {
    id: false,
  }
  const { columnVisibilityModel, handleColumnVisibilityChange } = useColumnVisibilityModel(defaultVisibilityModel);
  const CountryContent = () => (
    <div style={{ height: 750, width: "100%" }}>
      <ActionBar />
      <DatailGridComponent
        key={"meter"}
        // handlePageSizeChange={handlePageSizeChange}
        columns={[
          ...[ID(10), TITLE(400)],
          {
            field: "edit",
            headerName: "",
            width: 100,
            align: "center",
            headerAlign: "center",
            renderCell: (cellValues: any) => {
              const onClick = (e: any) => {

              };
              return (
                <div className="max-auto w-100 text-center"
                  onClick={onClick}
                >
                  <img src={icons?.editIcon} alt="" />

                </div>
              );
            },
          },
          {
            field: "delete",
            headerName: "",
            width: 50,
            align: "center",
            headerAlign: "center",
            renderCell: (cellValues: any) => {
              const onClick = (e: any) => {
              };
              return (
                <div className="max-auto w-100 text-center"
                  onClick={onClick}
                >
                  <img src={icons?.trashIcon} alt="" />
                </div>

              );
            },
          },
        ]}
        rows={countryRows ?? []}
        handlePageChange={() => console.log}
        totalRows={20}

        height={417}
        pageSize={10}
        pagination={[5, 10, 15]}
        checkboxSelection={false}
        columnVisibilityModel={columnVisibilityModel}
      // handleColumnVisibilityModelChange={handleColumnVisibilityChange}

      />
    </div>)


  const tabs = [
    {
      label: "کشور",
      content: <Country/>
    },
    {
      label: "جهت",
      content: <CordinalDirection/>
    },
    {
      label: "استان",
      content: <Province/>
    },
    {
      label: "نام شرکت",
      content: <Headquarters/>
    },
    {
      label: "منطقه",
      content: <Region/>
    },
    {
      label: "ناحیه",
      content: <Zone/>
    },

    {
      label: "شهر/روستا/شهرداری",
      content: <Municipality/>
    },
    {
      label: "محدوده اشتراکی",
      content: <ReadingBound/>
    },
    {
      label: "بلوک اشتراکی",
      content: <ReadingBlock/>
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
        <Breadcrumb items={[{ href: "/managemen", label: "مدیریت" }, { label: "مدیریت نواحی" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='650px'/>
        </div>

      </div>
    </DefaultLayout>
  );
};


export default Page
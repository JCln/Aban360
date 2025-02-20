import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "../../components/Common/BreadCrumb";
import CardWithTabs from "../../components/Common/CardWithTabs";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { faEdit, faEye, faHome, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../../components/Form/ButtonComponent";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { DatailGridComponent } from "../../components/Common/DataGridComponent";
// import GroupUserImg from  '../../assets/images/icons/usergroup.png'
import { useEffect } from "react";
import { fetchLocation, fetchSummary } from '../../api/summary';
import Owner from '../../components/Summary/Owner';
import Property from '../../components/Summary/Property';
import Siphon from '../../components/Summary/Siphon';
import Meter from '../../components/Summary/Meter';
import Violation from '../../components/Summary/Violation';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Common/Loading';


type StringObject = Record<string, any>;

const Page = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("query") as string;
  // const [location, setLocation] = useState([])
  const [summary, setSummary] = useState<StringObject>()
  const [loading, setLoading] = useState<boolean>(false);
  const [breadcrumb, setBreadcrumb] = useState([])

  useEffect(() => {
    fetchLocation({ input: "123456" }).then(res => {
      if (res && res.data) {
        setBreadcrumb(res.data)
      }
    })
    setLoading(true)
    fetchSummary({ input: searchTerm }).then(res => {
      if (res && res.data) {
        setSummary(res.data)
        setLoading(false)
        console.log(res.data)
      }
    })
  }, [searchTerm])
  // Example rows for the DataGrid
  const rows: GridRowsProp = [
    { id: 1, col1: "موقعیت جغرافیایی: (۲۵,۶۴)", col2: "قطر: 120 میلی متر" },
    { id: 2, col1: "موقعیت جغرافیایی: (۲۵,۶۴)", col2: "قطر: 120 میلی متر" },
    { id: 3, col1: "موقعیت جغرافیایی: (۲۵,۶۴)", col2: "قطر: 120 میلی متر" },
  ];


  // Example columns for the DataGrid
  const columns: GridColDef[] = [
    { field: "col1", headerName: "", width: 180 },
    { field: "col2", headerName: "", width: 150 },
  ];

  // const navigate = useNavigate();
  const CardContent = (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 loading">
          <Loading type={"spin"} color="#3856ac" />
        </div>
      ) : (
        ""
      )}
      <div className="row flex gap-4 mb-4 ">
        <div className="row flex bg-gray-200 rounded-xl p-1 gap-6">
          <div className="col flex-3 p-1">
            <div className="flex">
              <label>شناسه قبض: </label>
              <span className="font-bold number">87887</span>
            </div>

          </div>
          <div className="col flex-3  p-1">
            <div className="flex">
              <label>اشتراک: </label>
              <span className="font-bold number">87887</span>
            </div>
          </div>
          <div className="col flex-3  p-1">
            <div className="flex">
              <label>ردیف:</label>
              <span className="font-bold number">87887</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row flex gap-4 mb-4">
        <div className="col flex-1 bg-light-gray  rounded-xl p-1 p-4">
          <div className="row flex   gap-6">
            <div className="col flex-6 p-1">
              <div className="flex">
                <label>نام:</label>
                <span className="font-bold"> {summary?.fullName}</span>
              </div>

            </div>
            <div className="col flex-6  p-1">
              <div className="flex">
                <label>نشانی: </label>
                <span className="font-bold">{summary?.address}</span>
              </div>
            </div>
          </div>
          <div className="row flex gap-6 mt-4">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>تعداد خانوار: </label>
                <span className="font-bold number"> {summary?.contractualCapacity} </span>
              </div>

            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>آخرین بدهی: </label>
                <span className="font-bold number">{summary?.debtAmount}</span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label> طبقه مصرف: </label>
                <span className={`font-bold text-${summary?.consumptionClassColor}`}>{summary?.consumtionClass}</span>
              </div>
            </div>
          </div>
          <div className="row flex gap-6 mt-4">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>وضعیت انشعاب : </label>
                <span className={`font-bold text-${summary?.branchStateColor}`}> {summary?.branchState} </span>
              </div>

            </div>

            <div className="col flex-1  p-1">
              <div className="flex">
                <label> وضعیت کنتور : </label>
                <span className={`font-bold text-${summary?.waterMeterStateColor}`}>{summary?.waterMeterState}</span>
              </div>
            </div>
          </div>

        </div>
        <div className="col flex-1 bg-light-gray  rounded-xl p-1 p-4">
          <div className="row flex  gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>تعداد واحد مسکونی آب: </label>
                <span className="font-bold number"> {summary?.domesticUnitWater}   </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>تعداد واحد تجاری  آب: </label>
                <span className="font-bold number">{summary?.commercialUnitWater} </span>
              </div>
            </div>
          </div>
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>تعداد واحد مسکونی فاضلاب: </label>
                <span className="font-bold number"> {summary?.domesticUnitSewage}   </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>تعداد واحد تجاری  فاضلاب:  </label>
                <span className="font-bold number"> {summary?.commercialUnitSewage}</span>
              </div>
            </div>
          </div>
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>  تعداد واحد سایر آب:   </label>
                <span className="font-bold number">  {summary?.otherUnitWater}  </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>  تعداد واحد سایر  فاضلاب:    </label>
                <span className="font-bold number">{summary?.otherUnitSewage} </span>
              </div>
            </div>
          </div>
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>  تعداد واحد خالی از سکنه :   </label>
                <span className="font-bold number"> {summary?.emptyUnit}   </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="row flex gap-4 mb-4">
        <div className="col flex-1 bg-light-gray rounded-xl p-1 p-4">
          <div className="row flex  gap-6">
            <div className="col flex-6 p-1">
              <div className="flex">
                <div className="font-bold text-md">تگ ها</div>
              </div>
            </div>
          </div>
          {/* Tags */}
          <div className="row flex   gap-6 mt-4">
            {summary && summary?.tags?.map((item: any, index: any) =>
              <div className="col flex-1 p-1" key={index}>
                <div className="flex">
                  <div className='bg-white rounded p-1'>{item} </div>
                </div>
              </div>
            )}
          </div>

        </div>
        <div className="col flex-1 bg-light-gray  rounded-xl p-1 p-4">
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <div className="font-bold text-md">کاربری</div>
              </div>
            </div>
          </div>
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>نوع کاربری: </label>
                <span className="font-bold">{summary?.usageTitle}    </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>ظرفیت قراردادی:  </label>
                <span className="font-bold number">{summary?.contractualCapacity} </span>
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className="bg-light-gray  rounded-xl p-1  p-4">
        <div className="col p-1 font-bold my-2">تاریخ ها</div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col flex-1  p-1">
            <div className="flex">
              <label>تاریخ درخواست انشعاب آب : </label>
              <span className="font-bold number"> {summary?.requestDayWater}</span>
            </div>
          </div>
          <div className="col flex-1  p-1">
            <div className="flex">
              <label> تاریخ درخواست انشعاب فاضلاب: </label>
              <span className="font-bold">{summary?.requestDaySewage}</span>
            </div>
          </div>
          <div className="col flex-1  p-1">
            <div className="flex">
              <label> تاریخ ثبت: </label>
              <span className="font-bold number">{summary?.subscriptionDay}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col flex-1  p-1">
            <div className="flex">
              <label>تاریخ نصب انشعاب آب : </label>
              <span className="font-bold number"> {summary?.installaionDayWater}</span>
            </div>
          </div>
          <div className="col flex-1  p-1">
            <div className="flex">
              <label> تاریخ نصب انشعاب فاضلاب: </label>
              <span className="font-bold number"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <DefaultLayout>
      <div className="dashboard-page container  mx-auto">
        <Breadcrumb items={breadcrumb} />
        <div className="mb-20 mt-10">
          <CardWithTabs content={CardContent} maxHeight='430px' />
        </div>
        <div className="my-20">
          <Owner input={searchTerm} />
        </div>
        <div className="my-20">
          <Property input={searchTerm} />
        </div>
        <div className="my-20">
          <Meter input={searchTerm} />
        </div>
        <div className="my-20">
          <Siphon input={searchTerm} />
        </div>
        <div className="my-20">
          <Violation input={searchTerm} />
        </div>
      </div>
    </DefaultLayout>
  );
};


export default Page
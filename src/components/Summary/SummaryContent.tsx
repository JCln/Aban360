import React, { useState } from 'react'
import { useEffect } from "react";
import { fetchSummary } from '../../api/summary';
import { toast } from 'react-toastify';
import Breadcrumb from '../Common/BreadCrumb';
import CardWithTabs from '../Common/CardWithTabs';
import Loading from '../../components/Common/Loading';

type StringObject = Record<string, any>;

const SummaryContent = ({ inputSearch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [summary, setSummary] = useState<StringObject>()
  // const inputSearch = localStorage?.getItem('lastInputSearch')

  useEffect(() => {
    setLoading(true)
    fetchSummary({ input: inputSearch }).then(res => {
      if (res && res.data) {
        setSummary(res.data)
        setLoading(false)
      }
      else {
        setLoading(false)
        toast('برای این شناسه قبض داده ای یافت نشد', { type: "error" })
      }
    }).catch(error => {
      setLoading(false)
      console.log(error)
    })
  }, [inputSearch])


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
              <span className="font-bold number px-2">{summary?.billId}</span>
            </div>

          </div>
          <div className="col flex-3  p-1">
            <div className="flex">
              <label>اشتراک: </label>
              <span className="font-bold number px-2">{summary?.readingNumber}</span>
            </div>
          </div>
          <div className="col flex-3  p-1">
            <div className="flex">
              <label>ردیف:</label>
              <span className="font-bold number px-2"></span>
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
                <label>نوع سازه : </label>
                <span className="font-bold number">{summary?.constructionType}</span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label> کاربری مصرف: </label>
                <span className={`font-bold `}>{summary?.usageConsumtionTitle}</span>
              </div>
            </div>

          </div>
          <div className="row flex gap-6 mt-4">
            {/* <div className="col flex-1 p-1">
              <div className="flex">
                <label>وضعیت انشعاب : </label>
                <span className={`font-bold text-${summary?.branchStateColor}`}> {summary?.branchState} </span>
              </div>

            </div> */}
            <div className="col flex-1 p-1">
              <div className="flex">
                <label> کاربری  فروش  : </label>
                <span className={`font-bold `}> {summary?.usageSellTitle} </span>
              </div>

            </div>

            <div className="col flex-1  p-1">
              <div className="flex">
                <label> تاریخ نصب سیفون  : </label>
                <span className={`font-bold text-${summary?.waterMeterStateColor}`}>{summary?.siphonInstallationDate}</span>
              </div>
            </div>
          </div>

        </div>
        <div className="col flex-1 bg-light-gray  rounded-xl p-1 p-4">
          <div className="row flex  gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>تعداد واحد مسکونی آب: </label>
                <span className="font-bold number"> {summary?.unitDomesticWater}   </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>تعداد واحد تجاری  آب: </label>
                <span className="font-bold number">{summary?.unitCommercialWater} </span>
              </div>
            </div>
          </div>
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>تعداد واحد مسکونی فاضلاب: </label>
                <span className="font-bold number"> {summary?.unitDomesticSewage}   </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>تعداد واحد تجاری  فاضلاب:  </label>
                <span className="font-bold number"> {summary?.unitCommercialSewage}</span>
              </div>
            </div>
          </div>
          <div className="row flex   gap-6">
            <div className="col flex-1 p-1">
              <div className="flex">
                <label>  تعداد واحد سایر آب:   </label>
                <span className="font-bold number">  {summary?.unitOtherWater}  </span>
              </div>
            </div>
            <div className="col flex-1  p-1">
              <div className="flex">
                <label>  تعداد واحد سایر  فاضلاب:    </label>
                <span className="font-bold number">{summary?.unitOtherSewage} </span>
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
            {summary && summary?.waterMeterTags?.map((item: any, index: any) =>
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
                <span className="font-bold">{summary?.usageSellTitle}    </span>
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

    <div className="dashboard-page container  mx-auto">
      <Breadcrumb items={[{ label: summary?.cordinalDirectionTitle }, { label: summary?.headquartersTitle },
      { label: summary?.provinceTitle },
      { label: summary?.regionTitle },
      { label: summary?.zoneTitle },
      { label: summary?.municipalityTitle },
      ]} />
      <div className="mb-20 mt-10">
        <CardWithTabs content={CardContent} maxHeight='430px' />
      </div>
    </div>
  );
};


export default SummaryContent
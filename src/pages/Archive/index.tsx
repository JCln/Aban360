import CardWithTabs from "../../components/Common/CardWithTabs";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryContent from '../../components/Summary/SummaryContent';
import { icons } from '../../components/Icons/Icons';
import Loading from '../../components/Common/Loading';

const Page = () => {
  const location = useLocation();
  const previousPath = location.state?.from || -1;
  const inputSearch = localStorage?.getItem('lastInputSearch')
  useEffect(() => {
  }, [inputSearch])

  const arr = ["مجوز ها", "ساختمان", "ارزیابی", "سایر"]

  const CardContent = (
    <div className="container mx-auto p-4">
      {/* {loading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 loading">
          <Loading type={"spin"} color="#3856ac" />
        </div>
      ) : (
        ""
      )} */}
      <div className="row flex gap-4 mb-4 ">
        <div className="grid grid-cols-12 bg-gray-200 rounded-xl p-1 gap-6">
          {arr?.map((item, index) =>
            <div className="col-span-2 mx-auto p-1">
              <div className="flex flex-col items-center">
                <img src={icons.folder} alt="" width={100} />
                <label className="text-center">{item} </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  )

  return (
    <DefaultLayout options={{ showToolbar: true }}>
      <div className="dashboard-page container  mx-auto">
        <div className="">
          <SummaryContent inputSearch={inputSearch} />
          <div className="bg-white rounded-1xl p-1">
            <div className="flex bg-gray-200 rounded-xl p-2 space-x-4">
              <img src={icons.addFolder} alt="" width={40} />
              <img src={icons.addFolder} alt="" width={40} />
              <img src={icons.addFolder} alt="" width={40} />
            </div>
          </div>
        </div>
        <CardWithTabs
          maxHeight='950px'
          arrow={false}
          content={CardContent}
        />
      </div>
    </DefaultLayout >
  );
};


export default Page
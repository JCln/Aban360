import CardWithTabs from "../../components/Common/CardWithTabs";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryContent from '../../components/Summary/SummaryContent';
import KardexContent from '../../components/Kardex/KardexContent';
import { icons } from '../../components/Icons/Icons';

const Page = () => {
  const location = useLocation();
  const previousPath = location.state?.from || -1;
  const inputSearch = localStorage?.getItem('lastInputSearch')
  useEffect(() => {
  }, [inputSearch])

  const tabs = [
    {
      label: " اخرین قبض",
      icon: <img src={icons?.user} width={27} alt="" className='ml-2' />,
      content: <KardexContent />
    },

  ];
  return (
    <DefaultLayout options={{showToolbar: true}}>
      <div className="dashboard-page container  mx-auto">
        <div className="mb-20 mt-10">
          <SummaryContent inputSearch={inputSearch} />
          <CardWithTabs
            tabs={tabs}
            maxHeight='450px'
          />

        </div>
      </div>
    </DefaultLayout>
  );
};


export default Page
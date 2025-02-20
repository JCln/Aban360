import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Breadcrumb from '../../../components/Common/BreadCrumb';
import { path } from '../../../config/path'
import CardWithTabs from '../../../components/Common/CardWithTabs';
import MeterType from '../../../components/Meter/MeterType';
import MeterMaterial from '../../../components/Meter/MeterMaterial';
import MeterProducer from '../../../components/Meter/MeterProducer';
import MeterDiameter from '../../../components/Meter/MeterDiameter';
import MeterUseType from '../../../components/Meter/MeterUseType';
import MeterUseState from '../../../components/Meter/MeterUseState';
import WaterMeterTagDefinition from '../../../components/Meter/WaterMeterTagDefinition';
const Page = () => {
  const tabs = [
    {
      label: "نوع کنتور",
      content: <MeterType/>
    },
    {
      label: "جنس کنتور",
      content: <MeterMaterial/>
    },
    {
      label: "قطر کنتور",
      content: <MeterDiameter/>
    },
    {
      label: " نوع مصرف کنتور",
      content: <MeterUseType/>
    },
    {
      label: "سازنده کنتور",
      content: <MeterProducer/>
    },
  
    {
      label: "وضعیت نصب",
      content: <MeterUseState/>
    },
    {
      label: "برچسب",
      content: <WaterMeterTagDefinition/>
    },
  ];

  return (
    <DefaultLayout>
      <div className="management-page container mx-auto">
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "کنتور" }]} />
        <div className="rounded-xl">
          <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />
        </div>
      </div>
    </DefaultLayout>
  );
};


export default Page
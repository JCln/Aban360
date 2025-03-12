import DefaultLayout from "../../components/Layouts/DefaultLayout";
import Owner from '../../components/Summary/Owner';
import Property from '../../components/Summary/Property';
import Siphon from '../../components/Summary/Siphon';
import Meter from '../../components/Summary/Meter';
import Violation from '../../components/Summary/Violation';
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryContent from '../../components/Summary/SummaryContent';
import { useEffect } from "react";

const Page = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("query") as string;
  return (
    <DefaultLayout options={{ showToolbar: true }}>
      <div className="dashboard-page container  mx-auto">
        <SummaryContent inputSearch={searchTerm} />
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
    </DefaultLayout >
  );
};


export default Page
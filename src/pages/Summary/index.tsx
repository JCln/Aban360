import React, { useState } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Breadcrumb from "../../components/Common/BreadCrumb";
// import CardWithTabs from "../../components/Common/CardWithTabs";
import DefaultLayout from "../../components/Layouts/DefaultLayout";
// import { faEdit, faEye, faHome, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
// import ButtonComponent from "../../components/Form/ButtonComponent";
// import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
// import { DataGridComponent } from "../../components/Common/DataGridComponent";
// import GroupUserImg from  '../../assets/images/icons/usergroup.png'
import { useEffect } from "react";
import { fetchSummary } from '../../api/summary';
import Owner from '../../components/Summary/Owner';
import Property from '../../components/Summary/Property';
import Siphon from '../../components/Summary/Siphon';
import Meter from '../../components/Summary/Meter';
import Violation from '../../components/Summary/Violation';
import { useLocation, useNavigate } from 'react-router-dom';
// import Loading from '../../components/Common/Loading';
// import { toast } from 'react-toastify';
import SummaryContent from '../../components/Summary/SummaryContent';


type StringObject = Record<string, any>;

const Page = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("query") as string;
  // const [location, setLocation] = useState([])
  const [summary, setSummary] = useState<StringObject>()
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  const location = useLocation();
  const previousPath = location.state?.from;
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
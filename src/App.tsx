// import logo from './logo.svg';
// import './App.css';
import './assets/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';
// import './assets/css/tailwind.css';
import { Routes, Route } from "react-router-dom";

import Signin from './pages/signin'
import Dashboard from './pages/dashboard'
import Summary from './pages/Summary'
import UserCreate from './pages/users/create'
import UserEdit from './pages/users/edit'
import UserManagement from './pages/management/users'
import ManagementGroup from './pages/management/users/group'
import AllUsers from './pages/management/users/allusers'
import Management from './pages/management'
import Districts from './pages/management/districts'
import CaptchaManagement from './pages/management/captcha'
import PeopleManagement from './pages/management/users/people'
import MeterManagement from './pages/management/meter'
import SiphoneMangement from './pages/management/siphone'
import PropertyMangement from './pages/management/property'

import BasicManagement from './pages/management/basic'
import MessageManagement from './pages/management/messages'
import TarifManagement from './pages/management/tarifs'
import TestTarifManagement from './pages/management/tarifs/test'
import PermissionsManagement from './pages/management/permissions'
import EditGroupUsers from './pages/users/edit-group'
import CreateGroupUsers from './pages/users/create-group'

import { AuthProvider } from './hooks/AuthContext';
import { ToastContainer } from 'react-toastify';
import { path } from './config/path';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App" dir='rtl'>
      <QueryClientProvider client={queryClient}>

        <AuthProvider>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path={path.dashboard} element={<Dashboard />} />
            <Route path={path.summary} element={<Summary />} />

            {/* management */}
            <Route path={path.management} element={<Management />} />
            <Route path={path.groupManagementUsers} element={<ManagementGroup />} />
            <Route path={path.districtsManagement} element={<Districts />} />
            <Route path={path.captchaManagement} element={<CaptchaManagement />} />
            <Route path={path.basicManagement} element={<BasicManagement />} />
            <Route path={path.messagesManagement} element={<MessageManagement />} />
            <Route path={path.tarifsManagement} element={<TarifManagement />} />
            <Route path={path.testTarfiManagement} element={<TestTarifManagement />} />
            <Route path={path.permissionsManagement} element={<PermissionsManagement />} />
            <Route path={path.meterManagement} element={<MeterManagement />} />
            <Route path={path.peopleManagement} element={<PeopleManagement />} />
            <Route path={path.siphonManagement} element={<SiphoneMangement />} />
            <Route path={path.propertyManagement} element={<PropertyMangement />} />
            {/* Users */}
            <Route path={path.userCreate} element={<UserCreate />} />
            <Route path={path.userEdit + ":id?"} element={<UserEdit />} />
            <Route path={path.userManagement} element={<UserManagement />} />
            <Route path={path.allUsers} element={<AllUsers />} />
            <Route path={path.editGroupUsers + ":id?"} element={<EditGroupUsers />} />
            <Route path={path.createGroupUsers} element={<CreateGroupUsers />} />

          </Routes>
        </AuthProvider>
        <ToastContainer />
      </QueryClientProvider>
    </div>
  );
}

export default App;

import BaseInfo from "~/routes/base-info";
import Header from "~/routes/header";
import SideBar from "~/routes/side-bar";
import TheBreadCrumb from "~/routes/the-bread-crumb";

export function Dashboard() {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <div className="w-5/6 m-4">
          <TheBreadCrumb></TheBreadCrumb>
          <BaseInfo></BaseInfo>
        </div>
        <div className="w-1/6">
          <SideBar></SideBar>
        </div>
      </div>
    </>
  );
}

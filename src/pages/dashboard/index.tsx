import DefaultLayout from "../../components/Layouts/DefaultLayout";
const Page = () => {

  return (
    <DefaultLayout>
      <div className="dashboard-page container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="bg-blue p-6 rounded-xl text-white text-center shadow-md">
            استعلام قبض
          </div>
          <div className="bg-green-500 p-6 rounded-xl text-white text-center shadow-md">
            مشاهده قبض
          </div>
          <div className="bg-yellow-500 p-6 rounded-xl text-white text-center shadow-md">
            جزییات
          </div>
          <div className="bg-red p-6 rounded-xl text-white text-center shadow-md">
            مشاهده قبض
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};


export default Page
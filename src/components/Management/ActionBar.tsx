import { FC, useEffect, useState } from "react";
import SearchForm from "../Search";
import { icons } from "../Icons/Icons";
import { FormField } from '../Form/GenericForm';
import CreateComponent from '../Form/CreateComponent';
import { useNavigate } from "react-router-dom";
interface Props {
  title?: string,
  formConfig?: FormField[],
  apiFunction?: (data: any) => Promise<any>;
  isModalRequest?: boolean;
  path?: string
}

const ActionBar: FC<Props> = ({ formConfig, title, apiFunction, path, isModalRequest = true }) => {
  const [create, setCreate] = useState(false)
  const navigate = useNavigate()
  const handleCreate = () => {
    if (isModalRequest) {
      setCreate(true);
    } else {
      navigate(path);
    }
  }
  const handleClose = () => setCreate(!create)
  return (
    <div className="container mx-auto my-2 ">

      {create && (
        <CreateComponent
          formConfig={formConfig}
          title={title}
          handleClose={handleClose}
          apiFunction={apiFunction}
          open={create}
        />
      )}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-12 md:grid-cols-5 gap-1">
          <div className="col-span-1 cursor-pointer">
            <img src={icons.pdf} alt="PDF Icon" />
          </div>
          <div className="col-span-1 cursor-pointer">
            <img src={icons.excel} alt="Excel Icon" />
          </div>
          <div className="col-span-1 cursor-pointer">
            <img src={icons.save} alt="Save Icon" />
          </div>
          <div className="col-span-1 cursor-pointer">
            <img src={icons.undo} alt="Undo Icon" />
          </div>
          <div className="col-span-1 cursor-pointer" onClick={handleCreate} >
            <img src={icons.plus} alt="Plus Icon" />
          </div>
        </div>
        <div className="col-span-6"></div>
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-12 md:grid-cols-8 gap-2">
          <div className="col-span-6">
            <SearchForm placeholder="جستجو" showButton={false} classes={'border-light-gray border-1 bg-white '} />
          </div>
          <div className="col-span-1 my-auto">
            <img src={icons.filter} alt="Filter Icon" />
          </div>
          <div className="col-span-1 my-auto">
            <img src={icons.refresh} alt="Filter Icon" />
          </div>
        </div>
      </div>
    </div>

  )
}
export default ActionBar;

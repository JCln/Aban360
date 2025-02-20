import React, { FC, useEffect, useState } from "react";
import Management from "./management";
import { fetchRoleParams } from '../../api/Roles/index';

interface Props {
    accordionDataProp?: any
    selectedItems?:[]
}
const SelectEndpoints: FC<Props> = ({ accordionDataProp,selectedItems }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [appValueKeys, setAppValueKeys] = useState([])
    const [moduleValueKeys, setModuleValueKeys] = useState([])
    const [accordionData, setAccordionData] = useState([])
    const [tabs, setTabs] = useState([])
    useEffect(() => {
        fetchRoleParams().then(res => {
            let app = res?.accessTreeValueKeyDto?.appValueKeys?.map(item => ({
                id: item?.id,
                title: item?.title,
            }))
            setAppValueKeys(res?.accessTreeValueKeyDto?.appValueKeys)
            setTabs(app)
        }).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        let app = appValueKeys.find(v => v.id === activeTab)
        setModuleValueKeys(app?.moduleValueKeys)
        let accordionData = app?.moduleValueKeys?.map(item => ({
            id: item?.id,
            title: item?.title,
            arrayChild: item?.subModuleValueKeys,
        }))
        if (accordionDataProp)
            setAccordionData(accordionDataProp)
        else
            setAccordionData(accordionData)
    }, [activeTab])

    return (
        <div>
            <div className="grid grid-cols-5 bg-white border-2 border-gray p-1 rounded">
                {tabs.map((tab: any) => (
                    <div
                        key={tab.id}
                        className={`col-span-1 mx-auto cursor-pointer p-2 ${activeTab === tab.id
                            ? "bg-light-blue text-gray text-white rounded-md"
                            : "bg-transparent"
                            }`}
                        onClick={() => { setActiveTab(tab?.id) }}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="mt-4">
                {activeTab !== null
                    ? (<Management accordionData={accordionData} checkIndex={"endpointId"} selectedItems={selectedItems} />)
                    : null}
            </div>
        </div>)
};
export default SelectEndpoints;

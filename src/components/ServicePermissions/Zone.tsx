import React, { FC, useEffect, useState } from "react";
import Management from "./management";
import { fetchUserParams } from '../../api/Roles/index';

interface Props {
    accordionDataProp?: any
    selectedItems?: [],
    defaultZone?: any

}
const Zone: FC<Props> = ({ accordionDataProp, selectedItems, defaultZone }) => {
    const [accordionData, setAccordionData] = useState([])
    useEffect(() => {
        if (!defaultZone) {
            fetchUserParams().then(res => {
                let accordionData = res?.data?.locationTree?.cordinalDirectionValueKeys?.map(item => ({
                    id: item?.id,
                    title: item?.title,
                    arrayChild: item?.provinceValueKeys
                }))
                setAccordionData(accordionData)
            }).catch(error => console.log(error))
        }
        else if (defaultZone?.locationTree?.cordinalDirectionValueKeys) {
            let accordionData = defaultZone?.locationTree?.cordinalDirectionValueKeys?.map(item => ({
                id: item?.id,
                title: item?.title,
                arrayChild: item?.provinceValueKeys
            }))
            setAccordionData(accordionData)
        }
    }, [])

    return (
        <div>
            <Management accordionData={accordionData} checkIndex={"zoneId"} selectedItems={selectedItems} />
        </div>)
};
export default Zone;

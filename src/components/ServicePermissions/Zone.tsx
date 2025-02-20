import React, { useEffect, useState } from "react";
import Management from "./management";
import {fetchUserParams } from '../../api/Roles/index';

const Zone = () => {
    const [accordionData, setAccordionData] = useState([])
    useEffect(() => {
        fetchUserParams().then(res => {
            console.log(res?.data?.locationTree)
            let accordionData = res?.data?.locationTree?.cordinalDirectionValueKeys?.map(item => ({
                id: item?.id,
                title: item?.title,
                arrayChild: item?.provinceValueKeys
            }))
            setAccordionData(accordionData)
        }).catch(error => console.log(error))
    }, [])

   
    return (
        <div>
            <Management accordionData={accordionData} checkIndex={"zoneId"}  />
        </div>)
};
export default Zone;

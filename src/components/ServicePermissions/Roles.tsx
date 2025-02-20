import { useEffect, useState } from "react";
import { fetchUserParams } from '../../api/Roles/index';
import { CustomCheckbox } from "../../components/Form/FormComponents";

const Roles = () => {
    const [options, setOptions] = useState([])
    useEffect(() => {
        fetchUserParams().then(res => {
            const options = res?.data?.roleInfo?.roleInfo.map((option) => ({
                id: option.id.toString(),
                value: option.id.toString(),
                label: option.title,
            }));
            setOptions(options)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <CustomCheckbox name="roleIds" options={options} selectAll={true} />
        </div>)
};
export default Roles;

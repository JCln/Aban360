import { useEffect, useState } from "react";
import { fetchUserParams } from '../../api/Roles/index';
import { CustomCheckbox } from "../../components/Form/FormComponents";

const Roles = (props) => {
    const { defaultRoles } = props
    const [options, setOptions] = useState([])
    console.log(defaultRoles?.roleInfo)

    useEffect(() => {
        if (!defaultRoles) {
            fetchUserParams().then(res => {
                // console.log(res)
                const options = res?.data?.roleInfo?.roleInfo.map((option) => ({
                    id: option.id.toString(),
                    value: option.id.toString(),
                    label: option.title,
                    isSelcted: option?.isSelcted
                }));
                setOptions(options)
            }).catch(error => console.log(error))
        } else {
            const options = defaultRoles?.roleInfo.map((option) => ({
                id: option.id.toString(),
                value: option.id.toString(),
                label: option.title,
                isSelected: option?.isSelected
            }));
            setOptions(options)
        }
    }, [])

    return (
        <div>
            <CustomCheckbox name="roleIds" options={options} selectAll={true} />
        </div>)
};
export default Roles;

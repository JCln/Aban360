import React, { FC } from 'react'
import { CustomCheckbox } from './FormComponents'

interface Props {
    options: { value: any, label: string }[],
    name: string
}
const CheckBoxArea: FC<Props> = ({ options, name }) => {

    return (
        <CustomCheckbox name={name} options={options} classNames='grid grid-cols-6 w-full' />
    )
}
export default CheckBoxArea
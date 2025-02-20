import { FC } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { ReactComponent as Loader } from '../../assets/images/loader.svg'
// interface ButtonProps {
//     title: string
//     icon: IconDefinition
//     color: string,
//     size: string,
//     loading?: boolean,
//     disabled?: boolean,
//     className?: string,
//     handleClick: any,
//     buttonType?: 'submit' | 'reset' | 'button' | 'undefined'
// }
const ButtonComponent: FC<any> = ({ size, title, icon, color, handleClick, className, loading, disabled, buttonType }) => {
    return (
        <div className="w-full mx-0 px-0">
            <div className={`button-el__button d-flex-inline d-flex text-center rounded bg-${color} text-[${size ?? 20}]`}>
                {/* <button type={`${type ?? 'button'}`} className={`${className} mid-rounded text-white px-2 py-1  bg-${color}`} onClick={handleClick} disabled={disabled}>   {!loading ? title : <Loader className="spinner" />} </button> */}
                {buttonType === 'submit' ? (
                    <button type="submit" className={`${className} cursor-pointer w-full text-white bg-${color}`} onClick={handleClick} disabled={disabled}>
                        <FontAwesomeIcon icon={icon} className={`relative top-1 px-2 text-white text-center  ${loading ? 'hidden' : ''}`} width={15} />
                        {!loading ? title : <Loader className="spinner spinner-btn" />} </button>
                ) :
                    <button type="button" className={`${className} cursor-pointer w-full rounded  p-2 text-white  bg-${color}`} onClick={handleClick} disabled={disabled}>
                        <FontAwesomeIcon icon={icon} className={`relative top-1 px-2 text-white text-center ${loading ? 'hidden' : ''} `} width={15} />
                        {!loading ? title : <Loader className="spinner spinner-btn" />}
                    </button>
                }
            </div>
        </div>
    )
}

export default ButtonComponent
import { FC, KeyboardEvent as ReactKeyboardEvent } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactComponent as Loader } from '../../assets/images/loader.svg'
interface ButtonProps {
    title?: string
    icon?: any
    color?: string
    size?: string
    loading?: boolean
    disabled?: boolean
    className?: string
    handleClick?: (event: any) => void
    buttonType?: 'submit' | 'reset' | 'button' | undefined
  }
  
  const ButtonComponent: FC<ButtonProps> = ({ 
    size, 
    title, 
    icon, 
    color, 
    handleClick, 
    className, 
    loading, 
    disabled, 
    buttonType 
  }) => {
    const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' && buttonType === 'submit' && !disabled) {
        handleClick(event);
      }
    };
  
    return (
      <div className="w-full mx-0 px-0">
        <div 
          className={`button-el__button d-flex-inline d-flex text-center rounded bg-${color} text-[${size ?? 20}]`}
          onKeyDown={handleKeyDown}
          tabIndex={buttonType === 'submit' ? 0 : -1}
        >
          {buttonType === 'submit' ? (
            <button 
              type="submit" 
              className={`${className} cursor-pointer w-full text-white bg-${color}`}
              onClick={handleClick}
              disabled={disabled}
            >
              <FontAwesomeIcon 
                icon={icon} 
                className={`relative top-1 px-2 text-white text-center ${loading ? 'hidden' : ''}`} 
                width={15} 
              />
              {!loading ? title : <Loader className="spinner spinner-btn" />}
            </button>
          ) : (
            <button 
              type="button"
              className={`${className} cursor-pointer w-full rounded p-2 text-white bg-${color}`}
              onClick={handleClick}
              disabled={disabled}
            >
              <FontAwesomeIcon 
                icon={icon} 
                className={`relative top-1 px-2 text-white text-center ${loading ? 'hidden' : ''}`} 
                width={15} 
              />
              {!loading ? title : <Loader className="spinner spinner-btn" />}
            </button>
          )}
        </div>
      </div>
    )
  }
  
  export default ButtonComponent

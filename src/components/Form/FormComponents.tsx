// FormComponents.tsx
import React, { useEffect, useState } from 'react';
import { useFormContext, RegisterOptions, Controller } from 'react-hook-form';
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
interface CustomInputProps {
  name: string;
  placeholder?: string;
  validation?: RegisterOptions;
  classNames?: string
  inputClass?: string
  defaultValue?: string
  readOnly?: boolean,
  type?: string,
  icon?: IconDefinition;
  borderStyle?: 'all' | 'bottom'
  showPasswordToggle?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  labelClass?: string
}

// export const CustomInput: React.FC<CustomInputProps> = ({
//   readOnly,
//   inputClass,
//   name,
//   placeholder,
//   validation,
//   classNames,
//   defaultValue,
//   type,
//   icon,
//   borderStyle = 'all',
//   showPasswordToggle = false,
//   onFocus,
//   onBlur,
//   labelClass
// }) => {
//   const {
//     register,
//     setValue,
//     formState: { errors },
//   } = useFormContext();

//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   // const { ref: inputRefRegister, ...registerRest } = register(name, validation);
//   // const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (defaultValue) {
//       setValue(name, defaultValue);
//       // inputRef.current.value = defaultValue;

//     }
//   }, [defaultValue, name, setValue]);

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };
//   const [hasValue, setHasValue] = useState(!!defaultValue);

//   const inputType = showPasswordToggle && isPasswordVisible ? 'text' : type;
//   const borderClasses =
//     borderStyle === 'bottom'
//       ? 'border-b-1 border-gray focus:border-blue-500'
//       : 'border border-gray-300 focus:border-blue-500';

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
//     setIsFocused(false);
//     setHasValue(!!e.target.value);
//   };
//   return (
//     <div className={`${classNames} col-sm my-auto relative`}>
//       <input
//         // {...registerRest}
//         // ref={(e) => {
//         //   inputRefRegister(e);
//         //   inputRef.current = e;
//         // }}
//         onFocus={() => setIsFocused(true)}
//         onBlur={handleBlur}
//         defaultValue={defaultValue}
//         type={inputType ?? 'text'}
//         className={`w-full my-auto px-4 py-2 ${borderClasses} focus:outline-none ${inputClass} ${errors[name] ? 'border-red-500 focus:ring-red-500' : ''
//           } ${icon ? 'pr-8' : ''}`}
//         // placeholder={placeholder}
//         {...register(name, validation)}
//       // readOnly={readOnly ?? false}
//       />
//       <label
//         htmlFor={name}
//         className={`absolute text-gray-500 duration-300 transform ${labelClass}
//         ${(hasValue || isFocused)
//             ? '-top-5 right-3 text-16 '
//             : 'top-3 right-4 text-16'
//           } 
//         pointer-events-none transition-all`}
//       >
//         {placeholder}
//       </label>
//       {showPasswordToggle && (
//         <button
//           type="button"
//           onClick={togglePasswordVisibility}
//           className="absolute inset-y-0 left-0 flex items-center pr-3 text-gray"
//         >
//           {isPasswordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
//         </button>
//       )}
//       {icon && (
//         <div className="absolute inset-y-0 right-0 flex items-center pr-1 text-gray pointer-events-none">
//           <FontAwesomeIcon icon={icon} className="bg-transparent text-right p-2" width={15} />
//         </div>
//       )}
//       {errors[name] && (
//         <p className="mt-1 text-sm text-red-500">{errors[name]?.message as string}</p>
//       )}
//     </div>
//   );
// };


export const CustomInput: React.FC<CustomInputProps> = ({
  readOnly,
  inputClass,
  name,
  placeholder,
  validation,
  classNames,
  defaultValue,
  type,
  icon,
  borderStyle = 'all',
  showPasswordToggle = false,
  onFocus,
  onBlur,
  labelClass
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputValue = watch(name);
  const [hasValue, setHasValue] = useState(!!defaultValue || !!inputValue);

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
      setHasValue(true);
    }
  }, [defaultValue, name, setValue]);

  useEffect(() => {
    const inputElement = document.getElementById(name) as HTMLInputElement;
    if (inputElement) {
      const interval = setInterval(() => {
        if (inputElement?.value !== '') {
          setHasValue(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [name])

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = showPasswordToggle && isPasswordVisible ? 'text' : type;
  const borderClasses = borderStyle === 'bottom'
    ? 'border-b-1 border-gray focus:border-blue-500'
    : 'border border-gray-300 focus:border-blue-500';

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    onBlur?.();
  };

  return (
    <div className={`${classNames} col-sm my-auto relative`}>
      <input
        {...register(name, validation)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={name}
        defaultValue={defaultValue}
        type={inputType ?? 'text'}
        className={`w-full my-auto px-4 py-2 ${borderClasses} focus:outline-none ${inputClass} 
        ${errors[name] ? 'border-red-500 focus:ring-red-500' : ''} 
        ${icon ? 'pr-8' : ''}`}
      />
      <label
        htmlFor={name}
        className={`absolute text-gray-500 text-16 transition-all duration-200 transform ${labelClass}
          ${hasValue || isFocused ? '-translate-y-6 right-3 text-blue-500' : 'translate-y-2 right-4'}
          pointer-events-none`}
      >
        {placeholder}
      </label>
      {showPasswordToggle && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 left-0 flex items-center pr-3 text-gray"
        >
          {isPasswordVisible ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </button>
      )}
      {icon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-1 text-gray pointer-events-none">
          <FontAwesomeIcon icon={icon} className="bg-transparent text-right p-2" width={15} />
        </div>
      )}
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};
interface BooleanSwitchProps {
  name: string;
  label?: string;
}

export const BooleanSwitch: React.FC<BooleanSwitchProps> = ({ name, label }) => {
  // Access form methods using useFormContext
  const {
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useFormContext();

  const currentValue = getValues(name);

  // Toggle switch handler
  // const toggleSwitch = () => {
  //   const newValue = !currentValue;
  //   setValue(name, newValue); // Toggle the value (true/false)
  // };
  const handleChange = (value: boolean) => {
    setValue(name, value); // Manually set the value to true/false
  };

  return (
    <div className="space-y-2 flex">
      {label && <label className="block text-sm font-medium pt-2 pl-3">{label}</label>}

      <div className="flex items-center justify-between space-x-4">
        {/* The Switch */}
        <Controller
          name={name}
          control={control}
          defaultValue={true} // Set the default value for the switch
          render={({ field }) => (
            <div
              onClick={() => field.onChange(!field.value)} // Toggle the value on click
              className={`relative inline-flex items-center h-6 rounded-full w-12 cursor-pointer transition-colors duration-300 ${field.value ? 'bg-green-500' : 'bg-gray-300'
                }`}
            >
              <span
                className={`inline-block w-4 h-4 bg-white rounded-full transform transition-transform duration-300 absolute top-1`}
                style={{
                  transform: field.value
                    ? 'translateX(-0.2rem)'
                    : 'translateX(-1.9rem)',
                }}
              ></span>
            </div>
          )}
        />
        {/* <span className="text-sm">{control._formValues[name] ? 'روشن' : 'خاموش'}</span> */}
      </div>

      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

interface CustomCheckboxProps {
  name: string;
  options: { value: string; label: string, isSelected?: boolean, name?: string }[];
  label?: string;
  classNames?: string;
  validation?: any;
  value?: any;
  selectAll?: boolean; // Add selectAll prop

}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  name,
  options,
  classNames = '',
  selectAll = false,

}) => {
  const { control, setValue, getValues, watch } = useFormContext();
  const selectedValues = watch(name) || (options.length === 1 ? false : []);

  // Effect to set initial value of the checkboxes
  // useEffect(() => {
  //   const existingValue = getValues(name);
  //   if ((options.length === 1 && typeof existingValue !== 'boolean') || (options.length > 1 && (!existingValue || existingValue.length === 0))) {
  //     const defaultSelectedValues = options
  //       .filter((option) => option.isSelected)
  //       .map((option) => option.value);
  //     setValue(name, options.length === 1 ? defaultSelectedValues.length > 0 : defaultSelectedValues); // Set the default selected values
  //   }
  // }, []);
  // useEffect(() => {
  //   const existingValue = getValues(name);
  //   if (!existingValue) {
  //     const defaultSelected = options
  //       .filter(opt => opt.isSelected)
  //       .map(opt => opt.value);

  //     setValue(name, selectAll ? defaultSelected : defaultSelected.length > 0);
  //   }
  // }, []);



  useEffect(() => {
    const existingValue = getValues(name);
    if (existingValue === undefined) {
      const defaultSelected = options
        .filter(opt => opt.isSelected)
        .map(opt => opt.value);

      if (selectAll) {
        setValue(name, defaultSelected);
      } else {
        setValue(name, defaultSelected.length > 0);
      }
    }
  }, []);

  // Handle change for individual checkboxes
  // const handleCheckboxChange = (optionValue: string, checked: boolean) => {
  //   let updatedValues;
  //   if (options.length === 1) {
  //     updatedValues = checked;
  //   } else {
  //     const currentValues = getValues(name) || [];
  //     updatedValues = checked
  //       ? [...currentValues, optionValue]
  //       : currentValues.filter((value) => value !== optionValue);
  //   }

  //   setValue(name, updatedValues);
  // };

  // Handle "Select All" checkbox change
  // const handleSelectAllChange = (checked: boolean) => {
  //   if (checked) {
  //     setValue(name, options.length === 1 ? true : options.map((opt) => opt.value));
  //   } else {
  //     setValue(name, options.length === 1 ? false : []);
  //   }
  // };

  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    if (!selectAll) {
      setValue(name, checked);
      return;
    }

    const currentValues = getValues(name) || [];
    const updatedValues = checked
      ? [...currentValues, optionValue]
      : currentValues.filter(value => value !== optionValue);
    setValue(name, updatedValues);
  };

  const handleSelectAllChange = (checked: boolean) => {
    setValue(name, checked ? options.map(opt => opt.value) : []);
  };
  // Check if all options are selected (for "Select All" checkbox state)
  // const isSelectAllChecked = () => {
  //   if (options.length === 1) {
  //     return selectedValues === true;
  //   }
  //   return (
  //     options.length > 0 &&
  //     Array.isArray(selectedValues) &&
  //     options.every((option) => selectedValues?.includes(option.value))
  //   );
  //   // return options.length > 0 && options.every((option) => selectedValues.includes(option.value));
  // };

  const isSelectAllChecked = () => {
    if (!selectAll) return false;
    return Array.isArray(selectedValues) &&
      options.every(opt => selectedValues.includes(opt.value));
  };
  // const isChecked = (optionValue: string) => {
  //   if (options.length === 1) {
  //     return Boolean(selectedValues);
  //   }
  //   const currentValues = Array.isArray(selectedValues) ? selectedValues : [];
  //   return currentValues.includes(optionValue);
  // };
  const isChecked = (optionValue: string) => {
    // if (!selectAll) return Boolean(selectedValues);
    if (!selectAll) {
      return selectedValues === true;
    }
    return Array.isArray(selectedValues) && selectedValues.includes(optionValue);
  };


  return (

    <div className={`${classNames} space-y-2`}>
      {selectAll && options.length > 1 && (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isSelectAllChecked()} // Check if all checkboxes are selected
            onChange={(e) => handleSelectAllChange(e.target.checked)} // Toggle "Select All"
            className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-sm font-medium px-1"></label>
        </div>
      )}

      <div className="flex flex-wrap space-x-4">
        {/* Individual Checkboxes */}
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Controller
              name={option?.name ?? name}
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  {...field}
                  value={option.value}
                  checked={isChecked(option.value)} // Check if option is selected
                  onChange={(e) => handleCheckboxChange(option.value, e.target.checked)} // Handle checkbox change
                  className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
              )}
            />
            <label className="text-sm text-base px-1">{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

interface CustomSelectProps {
  name: string;
  placeholder?: string
  options: Array<{ value: string; label: string, id?: number }>;
  validation?: RegisterOptions;
  classNames?: string
  selectClass?: string
  isMultiple?: boolean
  classNamePrefix?: string,
  defaultValue?: object[],
  borderStyle?: 'all' | 'bottom'

  handleChange?: (val: { id: number, label: string, value: string }) => void
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ borderStyle = 'all', defaultValue, isMultiple, classNamePrefix, selectClass, name, placeholder, options, validation, classNames, handleChange }) => {
  const { control, setValue, formState: { errors }
  } = useFormContext();

  const borderClasses = borderStyle === 'bottom'
    ? 'border-b-1 border-gray focus:border-blue-500'
    : 'border-gray focus:border-blue-500';
  return (
    <div className={`${classNames}`}>
      <div
        className={` my-auto ${errors[name] ? "is-invalid" : ""
          }`}
      >
        <Controller
          control={control}
          name={name}
          rules={validation}
          defaultValue={defaultValue}
          render={({
            field: { onChange, value, ref },
          }) => (
            <Select
              value={value}
              id={name}
              isMulti={isMultiple ?? false}
              placeholder={placeholder}
              options={options ?? []}
              className={`select-control ${selectClass} ${borderClasses}`}
              classNamePrefix={`${classNamePrefix} react-select`}
              onChange={(val: any) => {
                setValue(name, val);
                if (handleChange) {
                  handleChange(val)
                }
                onChange(val);
              }}
              ref={ref}
            />
          )}
        />
      </div>

      <div className="invalid-feedback">
        {errors[name] &&
          `${errors[name]?.message}`}
      </div>
    </div>
  );
};


interface CustomDateProps {
  name: string;
  placeholder?: string
  validation?: RegisterOptions;
  classNames?: string
  inputClassNames?: string
  defaultValue?: string | null
}

export const CustomeDate: React.FC<CustomDateProps> = ({ defaultValue, name, placeholder, classNames, inputClassNames }) => {

  const { register, control, setValue, formState: { errors }
  } = useFormContext();
  return (
    <>
      <div
        className={`my-auto ${errors[name] ? "is-invalid" : ""
          }`}
      >
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <>
              <DatePicker
                value={defaultValue || field.value}
                calendar={persian}
                className=""
                inputClass={`rmdp-input ${inputClassNames}`}
                placeholder={placeholder}
                locale={persian_fa} // add this
                onChange={(date: any) => {
                  field.onChange(
                    new Date(date).toLocaleDateString(
                      "fa-IR-u-nu-latn",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )
                  );
                }}
                format={"YYYY/MM/DD"}
              />
            </>
          )}
        />
      </div>
      <div className="invalid-feedback">
        {errors[name] &&
          `${errors?.[name]?.message}`}
      </div>
    </>
  )
}

export const CustomGregorianDate: React.FC<CustomDateProps> = ({ defaultValue, name, placeholder, classNames, inputClassNames }) => {

  const { register, control, setValue, formState: { errors }
  } = useFormContext();
  return (
    <>
      <div
        className={`my-auto ${errors[name] ? "is-invalid" : ""
          }`}
      >
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <>
              <DatePicker
                value={defaultValue || field.value}
                className=""
                inputClass={`rmdp-input ${inputClassNames}`}
                placeholder={placeholder}
                onChange={(date: any) => {
                  field.onChange(
                    new Date(date)
                  );
                }}
                format={"YYYY/MM/DD"}
              />
            </>
          )}
        />
      </div>
      <div className="invalid-feedback">
        {errors[name] &&
          `${errors?.[name]?.message}`}
      </div>
    </>
  )
}
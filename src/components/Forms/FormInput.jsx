/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unknown-property */
import { Controller, useForm, useFormContext } from "react-hook-form";

const FormInput = ({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
  defaultValue,
}) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            <label
              ht={name}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label ? label : null}
            </label>
            <input
              type={type}
              id={id}
              placeholder={placeholder}
              value={value ? value : field.value}
              defaultValue={defaultValue ? defaultValue : ""}
              validation={validation ? validation : ""}
            />
          </div>
        )}
      />
    </>
  );
};

export default FormInput;

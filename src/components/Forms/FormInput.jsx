/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unknown-property */

import { Controller, useFormContext } from 'react-hook-form';

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
      {label && (
        <label
          ht={name}
          className="inline-block mt-2 text-sm font-medium text-black "
        >
          {label ? label : null}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            placeholder={placeholder}
            className="input input-sm input-bordered rounded input-md input-info w-full place-content-center"
            type={type}
            {...field}
            defaultValue={defaultValue ? defaultValue : ""}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;

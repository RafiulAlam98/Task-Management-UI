/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Controller, useFormContext } from "react-hook-form";

const FormSelectInput = ({ name, placeholder, validation, label, options }) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <select
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="select select-sm rounded  select-info w-full max-w-xs"
          >
            <option disabled selected>
              {placeholder}
            </option>
            {options && options.name((item) => <option>item</option>)}
          </select>
        )}
      />
    </>
  );
};

export default FormSelectInput;

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-extra-boolean-cast */

import { FormProvider, useForm } from "react-hook-form";

const Form = ({ children, submitHandler, defaultValues }) => {
  const formConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const onSubmit = (data) => {
    console.log(data);
    submitHandler(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;

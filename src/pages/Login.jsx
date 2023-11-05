/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import Form from "../components/Forms/Form";
import FormInput from "../components/Forms/FormInput";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://task-management-api-sigma.vercel.app/api/v1/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.success === true) {
          toast.success(res.message);
          navigate("/dashboard");
        }
        setResponseData(res);
      });
  };
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      <div className="">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.16233275.1687409673&semt=sph"
          alt=""
        />
      </div>

      <div className="my-auto w-2/3 mx-auto rounded shadow-2xl p-6">
        <h6 className="text-center text-2xl font-semibold mb-2 text-[#023047]">
          Employee Login
        </h6>
        <Form className="" submitHandler={onSubmit}>
          <div className="w-full">
            <FormInput name="email" label="Email" type="email" />
          </div>
          <div className="w-full">
            <FormInput name="password" label="Password" type="password" />
          </div>
          {loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <button
              className="btn block btn-sm btn-active btn-primary mt-5"
              type="submit"
            >
              Submit
            </button>
          )}
        </Form>

        {responseData.success === false > 0 && (
          <div className="alert alert-error mt-5 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className="text-white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <spa className="text-sm text-white font-semibold block">
              {responseData.message}
            </spa>
            <span className="text-sm text-white font-semibold block">
              {responseData.errorMessages[0].message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

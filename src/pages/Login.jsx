/* eslint-disable react/no-unknown-property */
import Form from "../components/Forms/Form";
import FormInput from "../components/Forms/FormInput";

const Login = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1  min-h-screen">
      <div>
        <img
          src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?w=740&t=st=1699029238~exp=1699029838~hmac=40b61d6111c414fb10bb6b890ba2f42bb039c19d70e4c201b9aebc4d7b7f28fa"
          alt=""
        />
      </div>

      <div className=" place-content-center min-h-screen">
        <Form submitHandler={onSubmit}>
          <FormInput name="email" label="Email" type="email" />
          <FormInput name="password" label="Password" type="text" />
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            htmlType="submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

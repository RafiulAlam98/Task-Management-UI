/* eslint-disable react/no-unknown-property */

import Form from '../components/Forms/Form';
import FormInput from '../components/Forms/FormInput';

const Login = () => {
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1">
      <div>
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg&ga=GA1.1.16233275.1687409673&semt=sph"
          alt=""
        />
      </div>

      <Form submitHandler={onSubmit}>
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="password" label="Password" type="text" />
        <button
          className="btn block btn-sm btn-active btn-primary mt-5"
          htmlType="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Login;

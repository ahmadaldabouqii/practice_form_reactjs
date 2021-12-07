import FormInput from "../InputField/FormInput";
import "../RegisterForm/Register.css";

const LoginForm = ({ onChange, onSubmit, ...values }) => {
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Incorrect Email!!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "incorrect password!",
      label: "Password",
      required: true,
    },
  ];

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        {inputs.map((inp) => (
          <FormInput
            key={inp.id}
            {...inp}
            value={values[inp.name]}
            onChangeHandler={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

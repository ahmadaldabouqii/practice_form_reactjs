import { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username Should be 3-16 characters & shouldn't include an special Character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It Should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters, & include at least 1 letter, 1 number and 1 speccial character! ",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ];

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
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

export default App;

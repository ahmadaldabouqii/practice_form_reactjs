import { useState } from "react";
import Register from "./components/RegisterForm/Register";
import Login from "./components/LoginForm/Login";
import WelcomeMessage from "./components/WelcomeMessage/Welcome";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    registered: false,
    logged: false,
  });

  /*
  function clearFields(event) {
    // we have to convert event.target to array
    // we use from method to convert event.target to array
    // after that we will use forEach function to go through every input to clear it
    Array.from(event.target).forEach((input) => (input.value = ""));
  }
  */

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const {
    username,
    email,
    birthday,
    password,
    confirmPassword,
    registered,
    logged,
  } = values;

  const users_data = [];

  const onSubmitRegister = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword) return;

    setValues({ ...values, registered: true, logged: false });

    const user_data = {
      name: username,
      email: email,
      birthday: birthday,
      password: password,
      confirmPassword: confirmPassword,
      registered: registered,
      logged: logged,
    };

    users_data.push(user_data);

    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify(users_data));
    } else {
      let data = JSON.parse(localStorage.getItem("users"));
      data.push(user_data);
      localStorage.setItem("users", JSON.stringify(data));
    }

    // <<<<< For Clear Fields After submit >>>>>
    // clearFields(event);
    // event.target.reset();
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    if (!localStorage.getItem("users") || !email || !password) return;

    let all_users = JSON.parse(localStorage.getItem("users"));

    all_users.forEach((acc) => {
      if (email === acc.email && password === acc.password) {
        setValues({ ...values, logged: true });
        localStorage.setItem("loggedAccount", JSON.stringify(acc));
      }
    });
  };

  const render = () => {
    if (logged)
      return (
        <WelcomeMessage
          name={JSON.parse(localStorage.getItem("loggedAccount")).name}
        />
      );
    else if (registered)
      return <Login onSubmit={onSubmitLogin} onChange={onChange} />;
    else
      return (
        <Register
          onSubmit={onSubmitRegister}
          onChange={onChange}
          values={values}
          setValues={setValues}
          password={password}
        />
      );
  };

  return <div>{render()}</div>;
};

export default App;

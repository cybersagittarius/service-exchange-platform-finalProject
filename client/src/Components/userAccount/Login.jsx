import { useState } from "react";
import LoginForm from "./forms/LoginForm";
//comment hii
const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [alertEM, setAlertEM] = useState(false);
  const [alertPW, setAlertPW] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    const isEmValid = emailValidator.test(email);

    if (!isEmValid) {
      setAlertEM(true);
      setTimeout(() => {
        setAlertEM(false);
      }, 5000);
      return false;
    }

    const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/;
    const isPwValid = pwValidator.test(passWord);

    if (!isPwValid) {
      setAlertPW(true);
      setTimeout(() => {
        setAlertPW(false);
      }, 5000);
      return false;
    }

    rememberMe === true
      ? saveOnLocal(email, passWord)
      : console.log("No email nor password saved in the browser");

    setEmail("");
    setPassWord("");
    setRememberMe(false);
  };

  const saveOnLocal = (email, passWord) => {
    let data = JSON.parse(localStorage.getItem("user"));

    if (data == null) {
      data = { email, passWord };
    } else {
      data.email = email;
      data.passWord = passWord;
    }

    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
  };

  //set change handlers at the parent level
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePW = (e) => {
    setPassWord(e.target.value);
  };

  const changeRM = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <>
      <LoginForm
        submitHandler={submitHandler}
        changeEmail={changeEmail}
        changePW={changePW}
        changeRM={changeRM}
        email={email}
        passWord={passWord}
        rememberMe={rememberMe}
        alertEM={alertEM}
        alertPW={alertPW}
      />
    </>
  );
};

export default Login;

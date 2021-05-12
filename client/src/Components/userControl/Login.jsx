import { useState } from "react";
import axios from './configure-files/axios'
//import axios from 'axios'

import LoginForm from "./forms/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [alertEM, setAlertEM] = useState(false);
  const [alertPW, setAlertPW] = useState(false);

  const postReturnedUser = (email, password) => {
    const data = { email, password }
    //console.log(data);

    /// FETCH TO SEND DATA TO BACKEND
    ///axios does not need res.json at all!!!!!!!!!!!!!
    axios.post('http://localhost:4000/login', data)
    .then(res => console.log(res.data))
    .then(oldUserFound => console.log(oldUserFound))
    //try this to compare with line 26
    .catch(error=>console.log(error.response && error.response.data))
    //.catch(err => console.log(err))
  }
   
  const submitHandler = (e) => {
    e.preventDefault();

    const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    const isEmailValid = emailValidator.test(email);

    if (!isEmailValid) {
      setAlertEM(true);
      setTimeout(() => {
        setAlertEM(false);
      }, 5000);
      return false;
    }

    const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/;
    const isPwValid = pwValidator.test(password);

    if (!isPwValid) {
      setAlertPW(true);
      setTimeout(() => {
        setAlertPW(false);
      }, 5000);
      return false;
    }

    rememberMe === true
      ? saveOnLocal(email, password)
      : console.log("No email nor password saved in the browser");
      
    postReturnedUser(email, password);

    setEmail("");
    setPassWord("");
    setRememberMe(false);
  };

  const saveOnLocal = (email, password) => {
    let data = JSON.parse(localStorage.getItem("user"));

    if (data == null) {
      data = { email, password };
    } else {
      data.email = email;
      data.password = password;
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
        submitHandler = { submitHandler }
        changeEmail = { changeEmail }
        changePW = { changePW }
        changeRM = { changeRM }
        email = { email }
        password = { password }
        rememberMe = { rememberMe }
        alertEM = { alertEM }
        alertPW = { alertPW }
      />
    </>
  );
};

export default Login;
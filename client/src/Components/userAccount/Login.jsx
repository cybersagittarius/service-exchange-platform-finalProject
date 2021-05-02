import { useState } from "react";
import axios from './configure-files/axios'

import LoginForm from "./forms/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [alertEM, setAlertEM] = useState(false);
  const [alertPW, setAlertPW] = useState(false);

  const postReturnedUser = (email, passWord) => {
    const capturedData = {email, passWord}
    //console.log(data);

    /// FETCH TO SEND DATA TO BACKEND
    // fetch('http://localhost:4000/login', {
    //     method: "POST",
    //     headers: { 'Context-Type': 'application/json' },
    //     body: JSON.stringify(data)  // backend will receive this in: req.body
    // })
    axios.post('/login', capturedData)
    .then(response=>{ 
      console.log('res received'); //response.data)
      response.json()
    })
    .then(oldUserFound => console.log(oldUserFound))
    // in case the API responded, we will have the error inside error.response.data 
    .catch(error=>console.log(error.response && error.response.data))
    }
  //   .then(res => res.json())
  //   .then(returnedUserCreated => console.log(returnedUserCreated))
  //   .catch(err => alert('An error!'))
  // }

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
      
    postReturnedUser(email, passWord);

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
        submitHandler = { submitHandler }
        changeEmail = { changeEmail }
        changePW = { changePW }
        changeRM = { changeRM }
        email = { email }
        passWord = { passWord }
        rememberMe = { rememberMe }
        alertEM = { alertEM }
        alertPW = { alertPW }
      />
    </>
  );
};

export default Login;

import React, { useState, useContext } from "react";
//import axios from "./configure-files/axios"
import axios from 'axios'

import ForgetPWForm from "./forms/ForgetPWForm";

const ForgetPW = () => {
  const [email, setEmail] = useState("");
  const [alertEM, setAlertEM] = useState(false);

  const postEmail = (email) =>{

    const data = { email }

   axios.post('http://localhost:4000/forget_password', data)
   .then(res => console.log(res.data))
   .then(oldEmailFound => console.log(oldEmailFound))
  // in case the API responded, we will have the error inside error.response.data 
    .catch(error=>console.log(error.res && error.res.data))
    .catch(err => console.log(err))
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

    postEmail(email); 
    
    setEmail("");
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <ForgetPWForm
        postEmail = { postEmail }
        submitHandler = { submitHandler }
        changeEmail = { changeEmail }
        email = { email }
        alertEM = { alertEM }
        />
      </>
    );
  };

export default ForgetPW;

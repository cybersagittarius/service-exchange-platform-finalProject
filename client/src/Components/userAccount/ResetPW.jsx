import React, { useState } from "react";
import ResetPWForm from "./forms/ResetPWForm";

const ResetPW = () => {
  const [email, setEmail] = useState("");
  const [alertEM, setAlertEM] = useState(false);

  const postEmail = (data) =>{
    console.log(data);

    //fetch data to send it to backend
    fetch('http://localhost:4000/reset_password', {
      method: "POST",
      headers: {'Context-Type': 'application/json'},
      body: JSON.stringify(data)
      //in backend the data will be received in req.body
    })
    .then(res=>res.json())
    .then(emailReceived=>console.log(emailReceived))
    .catch(err=>console.log(err))
  }

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
    setEmail("");
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <ResetPWForm
        postEmail = { postEmail }
        submitHandler = { submitHandler }
        changeEmail = { changeEmail }
        email = { email }
        alertEM = { alertEM }

      />
    </>
  );
};

export default ResetPW;

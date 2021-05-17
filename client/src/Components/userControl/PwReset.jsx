import React, { useState} from 'react'
import axios from 'axios';

import PwResetForm from './forms/PwResetForm'

const PwReset = () => {

    const [newpassword, setNewPassword] = useState("");
    const [confirmNewPW, setConfirmNewPW] = useState("");

    const [alertPW, setAlertPW] = useState(false);
    const [alertPWCheck, setAlertPWCheck] = useState(false);

    const getToken = async(req, res, err) => {
        const token = req.params.token
        console.log(token);

        await axios.get('http://localhost:4000/:id/:token', token)
        .then(res=>{
            console.log('res received', res.data)
        })
        .then(canResetPassword => console.log(canResetPassword))
        .catch(err=> console.log(err && err.response && err.response.data))
    }
   
    const resetPW = async(newpassword, confirmNewPW) => {
        const data = {newpassword, confirmNewPW};
        
        console.log(data);

        await axios.post('http://localhost:4000/reset_password', data)
        .then(res=>{
            console.log('res received, res.data')
        })
        .then(newPWReset => console.log(newPWReset))
        .catch(err => console.log(err && err.response && err.response.data))
       }

    const submitHandler = (e)=> {
        e.preventDefault();

        // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        // const isPwValid = pwValidator.test(newpassword);

        // if(!isPwValid){
        //     setAlertPW(true)
        //     setTimeout(() => {
        //         setAlertPW(false)
        //     }, 20000); 
        //     return false;                    
        // }        

        if(newpassword !== confirmNewPW) {
            setAlertPWCheck(true)
            setTimeout(()=>{
                setAlertPWCheck(false)
            }, 5000);
            return false;
        }

        !getToken()? console.log('Error!') :resetPW(newpassword, confirmNewPW)
    }
    
    const changeNewPW = (e)=> {
        setNewPassword(e.target.value);
    }

    const changeConfirmNewPW = (e) =>{
        setConfirmNewPW(e.target.value);
    }

    return (
        <>
        <PwResetForm
                    submitHandler = {
                        submitHandler }
                    changeNewPW = {
                        changeNewPW }
                    changeConfirmNewPW = {
                        changeConfirmNewPW }
                    alertPWCheck = {
                        alertPWCheck } 
                    alertPW = {
                        alertPW }       
            />    
        </>
    )
}

export default PwReset

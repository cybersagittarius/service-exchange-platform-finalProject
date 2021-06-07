import React, { useState, useContext } from 'react'
import axios from 'axios';
import searchContext from '../../context/SearchContext'

import PwResetForm from './forms/PwResetForm'

const PwReset = () => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPW, setConfirmNewPW] = useState("");

    const [alertPW, setAlertPW] = useState(false);
    const [alertPWCheck, setAlertPWCheck] = useState(false);

    const context = useContext(searchContext);
    const {userInfo} = context;

     const changeNewPW = (e) => {
        setNewPassword(e.target.value);
    }

    const changeConfirmNewPW = (e) =>{
        setConfirmNewPW(e.target.value)
    };
    
    const submitHandler = (e) => {
        e.preventDefault();

        // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        // const isPwValid = pwValidator.test(newPassword);

        // if(!isPwValid){
        //     setAlertPW(true)
        //     setTimeout(() => {
        //         setAlertPW(false)
        //     }, 20000); 
        //     return false;                    
        // }        

        if(newPassword !== confirmNewPW) {
            setAlertPWCheck(true)
            setTimeout(()=>{
                setAlertPWCheck(false)
            }, 5000);
            return false;
        }

        const url = `http://localhost:4000/`
        const authAxios = axios.create({
                baseURL: url,
                headers: { Authorization: `Bearer ${userInfo}`, 
                           "Content-Type": "application/json" },  
                data: { newPassword }                        
            }) 

        const updatePW = async ()=>{
                try{
                    const result = await authAxios.post('/reset_password/')
                    console.log(result.data)
                } catch(err)
                { console.log(err.message) }
            }
            updatePW();           
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


































    // const submitHandler = (e)=> {
    //     e.preventDefault();

        // const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        // const isPwValid = pwValidator.test(newpassword);

        // if(!isPwValid){
        //     setAlertPW(true)
        //     setTimeout(() => {
        //         setAlertPW(false)
        //     }, 20000); 
        //     return false;                    
        // }        

    //     if(newpassword !== confirmNewPW) {
    //         setAlertPWCheck(true)
    //         setTimeout(()=>{
    //             setAlertPWCheck(false)
    //         }, 5000);
    //         return false;
    //     }

     
    // }
    
    // const changeNewPW = (e)=> {
    //     setNewPassword(e.target.value);
    // }

    // const changeConfirmNewPW = (e) =>{
    //     setConfirmNewPW(e.target.value);
    // }
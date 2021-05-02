import React, { useState } from 'react'

import RegistrationForm from './forms/RegistrationForm'

const Register = () => {
     
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState(""); 
     const [email, setEmail] = useState("");     
     const [userName, setUserName] = useState("");
     const [passWord, setPassWord] = useState("");
     const [confirmPW, setConfirmPW] = useState(""); 

     const [country, setCountry] = useState(""); //for RegionCountrySelector package
     const [region, setRegion] = useState(""); //for RegionCountrySelector pack
    
     const [preview, setPreview] = useState("");
     const [savedImage, setSavedImage] = useState("");

     const [offerSelection, setOfferSelection] = useState([]);

     const [alertEM, setAlertEM] = useState (false);  
     const [alertPW, setAlertPW] = useState (false);
     const [alertPWCheck, setAlertPWCheck] = useState (false);  



    const postNewUser = (firstName, lastName, country, region, email, userName, passWord, confirmPW, savedImage, offerSelection) =>{

        const data = {firstName, lastName, country, region, email, userName, passWord, confirmPW, savedImage, offerSelection};

        console.log(data);    

        //fetch to send data to backend
        fetch('http://localhost:4000/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            //backend will receive this in: req.body
        })
        .then(res=>{ 
            console.log('res received', res)            
            return res.json()
        })
        .then(newUserCreated => console.log(newUserCreated))
        .catch(err=>console.log(err))
    }
    
     const submitHandler = (e) => {
         e.preventDefault();  
        
        //email validator source: 
        //At least 8 characters long;
        //One lowercase, one uppercase, one number and one special character;
        //No whitespaces. use https://regexr.com/ and https://regex101.com/ for writing up and testing regex
        //source: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a (section 6)
        
        const emailValidator = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/
        const isEmValid = emailValidator.test(email);        
        
        if(!isEmValid ){
            setAlertEM(true)
            setTimeout(() => {
                setAlertEM(false)
            }, 5000); 
            return false;           
        }
        
        const pwValidator = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,12})$/
        const isPwValid = pwValidator.test(passWord);

        if(!isPwValid){
            setAlertPW(true)
            setTimeout(() => {
                setAlertPW(false)
            }, 5000); 
            return false;                    
        }        
       
        if ((isEmValid && isPwValid) && (passWord!==confirmPW)) {
            setAlertPWCheck(true)
            setTimeout(() => {
                setAlertPWCheck(false)
            }, 5000); 
            return false;
        }

        postNewUser(firstName, lastName, country, region, email, userName, passWord, confirmPW, savedImage, offerSelection);

        //  setFirstName("");
        //  setLastName("");
        //  setCountry("");
        //  setRegion("");
        //  setEmail("");
        //  setUserName("");
        //  setPassWord("");
        //  setConfirmPW("");
         
        //  setPreview(null);
        //  setSavedImage(null);
         
        //  setOfferSelection([]);
    }    

    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const changeLastName = (e) => {
        setLastName(e.target.value);
    }

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changePassWord = (e) => {
        setPassWord(e.target.value);
    }

    const changeConfirmPW = (e) => {
        setConfirmPW(e.target.value);
    }  

    const changeCountry = (val) => {
        setCountry(val)
    }

    const changeRegion = (val) => {
        setRegion(val)
    }

    // const onClosing = () => {  
    //     console.log('onClose works!')      
    //     setPreview(null);
    //     setSavedImage(preview);    
    //   }
    
    const onCrop = (preview) => {
        console.log('onCrop works')
        setPreview(preview);
        setSavedImage(preview);
      }    
      
    const onBeforeFileLoad = (e) => {
        console.log('onBeforeFile works!')
        if(e.target.files[0].size >=80000) {
          alert("File is too big! The maximal file size is 80 KB");
          e.target.value="";
        }
    }
    
    const changeOfferSelection = (selection) => {
        setOfferSelection(selection);
        }    

     return (
        <>
        <RegistrationForm   
                          postNewUser = { postNewUser }
                          submitHandler = { submitHandler }
                          changeFirstName = { changeFirstName }
                          changeLastName = { changeLastName }
                          changeEmail = { changeEmail }
                          changeUserName = { changeUserName }
                          changePassWord = { changePassWord }
                          changeConfirmPW = { changeConfirmPW } 
                          changeCountry = { changeCountry } 
                          changeRegion = { changeRegion }
                          changeOfferSelection = { changeOfferSelection }
                          firstName = { firstName }
                          lastName = { lastName }
                          email = { email }
                          userName = { userName }
                          country = { country }
                          region = { region }
                          passWord = { passWord }
                          confirmPW = { confirmPW }
                          offerSelection = { offerSelection }
                          alertEM = { alertEM }
                          alertPW = { alertPW }
                          alertPWCheck = { alertPWCheck }  
                          
                          //props passing to grandchild of Avatar
                          // take onClose off to deactivate it
                          // onClose = { onClose }
                          onCrop = { onCrop }
                          onBeforeFileLoad ={ onBeforeFileLoad }
                          preview= { preview }
                          savedImage= { savedImage }
                          />      
        </>
    )
}

export default Register
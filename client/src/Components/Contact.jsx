import {useState} from 'react';
import axios from 'axios';
import ButtonMU from './userAccount/layout/ButtonMU';
import Spinner from 'react-bootstrap/Spinner';
const Contact = () => {
    //states
     const [contactData,setContactData] = useState({
        name:"",
        email:"",
        message:""
    });
    const [responseMessage,setResponseMessage] = useState("");
    const [loading,setLoading] = useState(false);

// Destructuring contactData
    const {name, email, message} = contactData;

// onChange event listener for all the input fields
    const onChange = (e)=>{
      setContactData({ ...contactData, [e.target.name]: e.target.value})
    }
   
    
   //Submit event handler
    const formSubmit = async e =>{
        e.preventDefault();
setLoading(true);
    // create user object
    const newMessage = {
        name,
        email,
        message
    };
//post to backend
try {
    const config = {
        headers: {
            'Content Type': 'apllication/json'
        }
    };
    const body = JSON.stringify(newMessage);
    const response = await axios.post(
        'https://localhost:4000/contact',
        body,
        config
    );
setResponseMessage(response.data.message);
contactData.name = "";
contactData.email = "";
contactData.message = "";


} catch (err) {
   console.log(`Something went wrong ${err}`);
   setLoading(false); 
}
    };
const handleEmail = () => {
    return <p>{responseMessage}</p>
}
        return (
            <>
            <form id="contact" onSubmit={(e) => formSubmit(e)} method="POST">
             <h3>Leave Us a message</h3>
            <div className="form-group">
            <div className="d-flex justify-content-end">
                <ButtonMU
                  buttonVariant={"text"}
                  buttonColor={"primary"}
                  buttonSize={"small"}
                />
              </div>
                {/* <label htmlFor="name">Name*</label> */}
                <input 
                id="name"
                className="form-control"
                type="text"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                placeholder="Enter Your Name*" required/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="email">Email*</label> */}
                <input 
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                placeholder="Email*" required className="form-control"/>
            </div>
            <div className="form-group">
                {/* <label htmlFor="message">Message</label> */}
                <textarea 
                id="message"
                className="form-control"
                name="message"
                value={message}
                onChange = {(e) => onChange(e)}
                 placeholder="Please write a message*" rows="5"/>
            </div>
              <button type="submit" className="btn btn-primary btn-md">
                  Submit
              </button>
              {loading ? <Spinner animation="border" role="status"/> : handleEmail()}
            </form>
            </>
            
    )
}

export default Contact

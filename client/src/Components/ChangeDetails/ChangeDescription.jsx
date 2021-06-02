import React, { useRef, useEffect, useState, useContext } from 'react';
import searchContext from '../../context/SearchContext';
import { Link } from "react-router-dom";
import axios from 'axios';



const ChangeDescription = () => {

    const context = useContext(searchContext)
    const { userInfo } = context

    console.log(userInfo)
    //states
    const [contactData, setContactData] = useState({

        description: userInfo.user.description
    });
    const [responseDescription, setResponseDescription] = useState(userInfo.user.description);
    const [loading, setLoading] = useState(false);


    const { description } = contactData;

    // onChange event listener for all the input fields
    const onChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }


    //Submit event handler
    const formSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        // create user object
        const newDescription = {
            description
        };
        //post to backend
        /*  try {
             const config = {
                 headers: {
                     'Content Type': 'application/json'
                 }
             };
             const body = JSON.stringify(newDescription);
             const response = await axios.post(
                 'https://localhost:4000/contact',
                 body,
                 config
             );
             setResponseDescription(response.data.description);
             contactData.description = "";
 
 
         } catch (err) {
             console.log(`Something went wrong ${err}`);
             setLoading(false);
         } */
    };
    const handleEmail = () => {

        return <p>{responseDescription}</p>
    }

    const nameRef = useRef()



    return (
        <>

            <h3>Change description</h3>
            <div className="change_description">
                <div >

                    <br />
                    <div >
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea
                            id="description"
                            className="description"
                            name="description"
                            value={description}
                            onChange={(e) => onChange(e)}
                            placeholder="about me*" rows="7" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-md">
                        Submit
              </button>

                </div>

                <button className="btn btn-primary btn-md"><Link to="/profile">Back to profile</Link>
                </button>
            </div>


        </>



    )
}

export default ChangeDescription;
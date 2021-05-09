import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Test = async() => {

    //const [message, setMessage] = useState({});
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoicG9vaEBnbWFpbC5jb20ifSwiaWF0IjoxNjIwNTc4MTEyLCJleHAiOjE2MjA1Nzg3MTJ9.bATM_A5qOVupROR7V_0hR8f9Nle6WT5-YE3plWZ8Zc4"

    //useEffect(() => {
        //    const config = { headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "http://localhost:3000/", 
        //    "Access-Control-Allow-Credentials": true},
        //     }
            // const request = await axios.get('http://localhost:4000/delete')
            //setMessage(request)
    

        const config = { headers: {"Authorization": token }}
                                   //"Access-Control-Allow-Credentials": true}
                       
        await axios.delete('http://localhost:4000/delete', config) 
            .then(res => {
            //console.log(res)          
            console.log('res received', res.data);       
            })
            .catch(err=>console.log(err))  
          
     //}, [])
         
    //  axios.post('http://localhost:4000/register', data)
    //  .then(res=>{ 
    //      console.log('res received', res.data)
    //  })
    //  .then(newUserCreated => console.log(newUserCreated))
    //  // in case the API responded, we will have the error inside error.response.data 
    //  .catch(err => console.log(err && err.response && err.response.data))
    //  }  

    return (
        <div>
            <h1>What a doggy day!</h1>
        </div>
    )
}

export default Test

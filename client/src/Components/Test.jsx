import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Test = () => {

    //const [message, setMessage] = useState({});
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…4MjJ9.QaKOqk_NbehqO1UpQ8N1tZM19ToMLzcGW4khtso-sSE
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…4MjJ9.QaKOqk_NbehqO1UpQ8N1tZM19ToMLzcGW4khtso-sSE'

    useEffect(() => {
           const config = { headers: { "Authorization": `Bearer  ${token}`, 
                             "Content-Type": "application/json", 
                            // "Access-Control-Allow-Origin": "http://localhost:3000/delete", 
                             "Access-Control-Allow-Credentials": true },
                }

                const bodyParameters = {
                    key: "value"
                 };

            const request = axios.delete('http://localhost:4000/delete', bodyParameters, config)
                            .then(res => {
                                    console.log(res)          
                                    // console.log('res received', res.data);       
                                    })
                            .catch(err=>console.log(err.message))  

            // setMessage(request)
    }, [])

        // const config = { headers: {"Authorization": `Bearer ${token}`, 
        //                            "Access-Control-Allow-Credentials": true,
        //                            "Content-Type": "application/json"
        //                         }
        //                     }
                       
        // axios.delete('http://localhost:4000/delete', config) 
        //     .then(res => {
        //     //console.log(res)          
        //     console.log('res received', res.data);       
        //     })
        //     .catch(err=>console.log(err))  
          
     
         
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

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Test = () => {

    //const [message, setMessage] = useState({});
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…4MjJ9.QaKOqk_NbehqO1UpQ8N1tZM19ToMLzcGW4khtso-sSE
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7I…wMjl9.8_ZbS89wGs69H7AKX85jGxaNmu02ffsqeqoYgIEQLaM`
    const url = `http://localhost:4000`

    useEffect(() => {

            const authDelete = axios.create({
                baseURL: url,
                headers: { Authorization: `Bearer ${token}`},                
            })
         
            const deleteUser = async () =>{
                const result = await authDelete.get(`/deleteUser`)
                console.log(result.data);
            } 

            }

                            // .then(res => {
                            //         console.log(res.data)          
                            //         // console.log('res received', res.data);       
                            //         })
                            // .catch(err=>console.log(err.message))  

            // setMessage(request)
    }, []) }
    
    
    return (
        <div>
            <h1>What a doggy day!</h1>
        </div>
    )
}

export default Test


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

   
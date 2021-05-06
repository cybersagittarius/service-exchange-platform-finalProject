import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Test = () => {

    const [message, setMessage] = useState({});
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5Mjg0OTNjMzZhZjc2ZDBhNmIxMTc5IiwibmFtZSI6IlNoaWJhIn0sImlhdCI6MTYyMDIxNDkzMiwiZXhwIjoxNjIwNTc0OTMyfQ.8sruuvVMkHdncxPCuglhD2P13oJ-oXw2yhg3xz9epHU"

    useEffect(() => {
           const config = { headers: {"Content-Type": "application/json"},
            }
            // const request = await axios.get('http://localhost:4000/delete')
            //setMessage(request)            

            axios.delete(`http://localhost:4000/delete`, config) 
            .then(res => { 
            console.log(res); 
            console.log(res.data);       
            })    
     }, [])


    return (
        <div>
            <h1>What a doggy day!</h1>
        </div>
    )
}

export default Test

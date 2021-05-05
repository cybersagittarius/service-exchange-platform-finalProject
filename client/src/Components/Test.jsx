import React from 'react'
import axios from 'axios'

const Test = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA5Mjg0OTNjMzZhZjc2ZDBhNmIxMTc5IiwibmFtZSI6IlNoaWJhIn0sImlhdCI6MTYyMDIxNDkzMiwiZXhwIjoxNjIwNTc0OTMyfQ.8sruuvVMkHdncxPCuglhD2P13oJ-oXw2yhg3xz9epHU"

    const config = { headers: [{"Content-Type": "application/json", "Authorization": `Bearer ${token}`}]}

    console.log(config)

    axios.delete('http://localhost:4000/delete', null, config)
    .then(res => {
        console.log(res);
        console.log(res.data);
    })  

    return (
        <div>
            <h1>What a doggy day!</h1>
        </div>
    )
}

export default Test

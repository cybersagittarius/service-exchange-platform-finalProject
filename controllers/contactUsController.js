const path = require('path');
const fs = require('fs');

const userPath = path.join(__dirname, '..', 'model', 'users.json');

const getContactMSG = () =>{

    return new Promise((resolve, reject)=>{

        fs.readFile(usersPath, (err, data)=>{
            if(err){
                reject(err)
            }else{

                const dataMap = JSON.parse(data).users.map(item=>{
                    return{
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        message: item.message
                    }
                })

                console.log(dataMap);

                resolve(dataMap);
            }
        })
    })
}

module.exports = {
    getContactMSG
}
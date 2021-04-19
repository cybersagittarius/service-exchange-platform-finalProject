// const path = require('path');
// const fs = require('fs');
// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

const userModel = require(',/models/userModel.js');
const 

const saveUsers = (body) =>{

    return new Promise((resolve, reject) => {
        
        const { email, password,  } = body

        fs.readFile(usersPath, (err, data)=>{
            if(err){
                reject(err)
            }else{
                //incoming data through fetch
                let newData = JSON.parse(data)
                console.log(newData)
                
                newData.users.push({
                    id: newData.users.length+1, 
                    ...body
                })
                
            fs.writeFile(usersPath, JSON.stringify(newData, null, 4), (errWrite)=>{
                if(errWrite){
                    reject(errWrite)
                }else{
                    resolve({'success': true, 'msg': 'User was saved'})
                }
            })
            }
        })
    })
}



// const saveUsers = (body) =>{

//     return new Promise((resolve, reject) => {
        
//         fs.readFile(usersPath, (err, data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 //incoming data through fetch
//                 let newData = JSON.parse(data)
//                 console.log(newData)
                
//                 newData.users.push({
//                     id: newData.users.length+1, 
//                     ...body
//                 })
                
//             //使用四个空格缩进
//             fs.writeFile(usersPath, JSON.stringify(newData, null, 4), (errWrite)=>{
//                 if(errWrite){
//                     reject(errWrite)
//                 }else{
//                     resolve({'success': true, 'msg': 'User was saved'})
//                 }
//             })
//             }
//         })
//     })
// }

module.exports = { saveUsers };
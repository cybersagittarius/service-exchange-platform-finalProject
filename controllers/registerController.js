const customError = require('../config/customError.js');
// const fs = require('fs');
// const usersPath = path.join(__dirname, '..', 'model', 'users.json')const dotenv = require('dotenv');
const userModel = require('../models/userModel.js');

const saveUsers = (body) =>{
    
    return new Promise((resolve, reject) => {
        
        //const { firstname, lastname, country, region, email, username, password, confirmpasswordpassword} = body
        
        //1. compare if this user already exists
        //2. if not, save this user
        //3. hash the password        
        const { password, confirmpw } = body;
        if (password !== confirmpw) {
            console.log('not a match!');
            const message = 'Not maching pasword'
            reject(customError(message))
        } else {            
        const newUser = new userModel({
            firstname: body.firstname,
            lastname: body.lastname,
            country: body.country,
            region: body.region,
            email: body.email,
            username: body.username,
            password: body.password, 
        })
        
        newUser.save()
        .then(response=>{
            resolve({'success': true, 'msg': 'New user saved!'})
        })
        .catch(err=>{
            reject(err);
        })
    }
            /*if(err){
                
            }else{
                
            }
            next()*/            
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
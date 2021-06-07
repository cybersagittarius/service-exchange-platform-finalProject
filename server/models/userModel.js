const mongoose = require('mongoose')

//ideally we remove the essential data out and have the essential data here as a reference from another collection which holds essential data
const userCredentialSchema = new mongoose.Schema ({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    //password: { type: String, required: true }, 
    avatar_url : { type: String, required: true },
    //originally skills look like this.
    skills: {type: [{ id: Number, value: String }], required: true},     
    description: { type: String },
    // hobby: {type: [ ], }, 
    // receive_email: { type: Boolean, required: true }    
},  
    { toObject: { virtuals: true } },
    { toJSON: {virtuals: true} },
    { timestamps: true },
)

//this module will export User as the instance 'User' of userSchema
module.exports = mongoose.model('user', userCredentialSchema);

//pre middleware(
//if we use this in a class, we DO NOT use arrow function, just use function()

// userCredentialSchema.pre('save', function (next) {
//     //constructor
//     const user = this

//     if (this.isModified('password') || this.isNew) {
//         // salt generator error is not our concern, neither will we have a solution that, it would be up to the code team to fix it
//         // therefore this section can go
        
//         // bcrypt.genSalt(10, (saltError, salt) =>{
//         //     if(saltError) {
//         //         console.log('Error!')
//         //         return next(saltError)
//             // } else {
//                 bcrypt.hash(user.password, 10, (hashError, hash)=>{
//                     if(hashError) {
//                         return next(hashError)                        
//                     } 

//                     user.password = hash;
//                     //part of the syntax of middleware, which means to move on to the next function
//                     next()
//                 })
//         //     }
//         // })
//     } else {
//         //password is neither newly created nor modified, already exists
//         return next()
//     }
// })

// userCredentialSchema.methods.comparePassword = function (password, next) {
//     bcrypt.compare(password, this.password, (error, isMatch)=>{
//         if(error) {
//             return next(error)
//         } else {
//             next(null, isMatch)
//         }
//     })
// }

// userCredentialSchema.virtual('fullname').get(function(){
//     return `${this.firstname} ${this.lastname}`
// })


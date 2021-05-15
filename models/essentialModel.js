const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const EssentialSchema = new mongoose.Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pwchangetoken: {type: String}
}, 
    {
    timestamp: true
})

//pre middleware here cannot use an arrow function, has to take function()
    EssentialSchema.pre('save', function (next) {
        //constructor
        const user = this
    
        if (this.isModified('password') || this.isNew) {
                bcrypt.hash(user.password, 10, (hashError, hash)=>{
                    if(hashError) {
                        return next(hashError)                        
                    } 
    
                    user.password = hash;
                        //part of the syntax of middleware, which means to move on to the next function
                    next()
                })           
        } else {
            //password is neither newly created nor modified, already exists
            return next()
        }
    })
    
    EssentialSchema.methods.comparePassword = function (password, next) {
        bcrypt.compare(password, this.password, (error, isMatch)=>{
            if(error) {
                return next(error)
            } else {
                next(null, isMatch)
            }
        })
    }

module.exports = mongoose.model('essential', EssentialSchema)
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema ({
    username: { type: String, required: true, unique: true, minlength: 3, trim: true },
    password: { type: String, required: true },
},
    {timestamps: true}
)


//pre middleware
userSchema.pre('save', (next)=>{
    //constructor
    const user = this

    if (this.isModified('password') || this.isNew) {
        bcrypt.getSalt(10, (saltError, salt) =>{
            if(saltError) {
                console.log('Error!')
                return next(saltError)
            } else {
                bcrypt.hash(user.password, salt, (hashError, hash)=>{
                    if(hashError) {
                        return next(hashError)                        
                    } 

                    user.password = hash;
                    //part of the syntax of middleware, which means to move on to the next function
                    next()
                })
            }
        })
    } else {
        //password is neither newly created nor modified, already exists
        return next()
    }
})

userSchema.methods.comparePassword = (password, callback) =>{
    bcrypt.compare(password, this.password, (error, isMatch)=>{
        if(error) {
            return callback(error)
        } else {
            callback(null, isMatch)
        }
    })
}

//this module will export User as the instance 'User' of userSchema
module.exports = mongoose.model('User', userSchema);
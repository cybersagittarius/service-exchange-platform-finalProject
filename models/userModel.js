const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userCredentialSchema = new mongoose.Schema ({

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true }, 
    avatar_url : { type: String, require: true},
    // avatar: { data: Buffer, contentType: String, required: true},
    // skills: { type: String, required: true },

},  {toObject: { virtuals: true }},
    {toJSON: {virtuals: true}},
    {timestamps: true}
)

//pre middleware(
//if we use this in a class, we DO NOT use arrow function, just use function()

userCredentialSchema.pre('save', function (next) {
    //constructor
    const user = this

    if (this.isModified('password') || this.isNew) {
        // salt generator error is not our concern, neither will we have a solution that, it would be up to the code team to fix it
        // therefore this section can go
        
        // bcrypt.genSalt(10, (saltError, salt) =>{
        //     if(saltError) {
        //         console.log('Error!')
        //         return next(saltError)
            // } else {
                bcrypt.hash(user.password, 10, (hashError, hash)=>{
                    if(hashError) {
                        return next(hashError)                        
                    } 

                    user.password = hash;
                    //part of the syntax of middleware, which means to move on to the next function
                    next()
                })
        //     }
        // })
    } else {
        //password is neither newly created nor modified, already exists
        return next()
    }
})

userCredentialSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, (error, isMatch)=>{
        if(error) {
            return next(error)
        } else {
            next(null, isMatch)
        }
    })
}

userCredentialSchema.virtual('fullname').get(function(){
    return `${this.firstname} ${this.lastname}`
})
//this module will export User as the instance 'User' of userSchema
module.exports = mongoose.model('user', userCredentialSchema);
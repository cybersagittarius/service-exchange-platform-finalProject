const mongoose = require("mongoose");
require('dotenv').config();

//without async
//mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

//connect to database
// const connection = mongoose.connection;
// connection.once('open', (err)=>{
//     if(err){
//         console.log('cannot open the connection!')
//     }
//     console.log('MongoDB connection established successfully!')
// })

//implement async
const connectDB = async () => {
    //set uri for database
    
    //const uri = xxxxxxx 
    const uri = process.env.MONGO_ATLAS_URI;
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            //userFindAndModify was set to true at first, but this was deprecated by MongoDB. Now it should be set to false
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected to Atlas ${conn.connection.host}`);
    }catch(err){
        return console.log(err)
    }
}

module.exports = connectDB;
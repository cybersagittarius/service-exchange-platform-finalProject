const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cors());

const uri = process.env.ATLAS_MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connection established successfully!')
})

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const pwResetRouter = require('./routes/pwResetRouter');
const contactUsRouter = require('./routes/contactUsRouter');

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/reset_password', pwResetRouter);
app.use('/contact', contactUsRouter);

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        console.log(`Application/Server is now listening on port ${port}`);
    }
})

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(cors());

//connect to DB
connectDB();

//require routers
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const pwResetRouter = require('./routes/pwResetRouter');
const contactUsRouter = require('./routes/contactUsRouter');
const connectDB = require('./config/db');

//user routers as middlewares
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

//Central Error Handling
app.use(errorHandler = (err, req, res, next)=> {
    res.status(err.status || 500).json({ error: err.message })
})

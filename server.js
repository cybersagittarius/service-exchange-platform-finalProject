const connectDB = require('./config/dbConnect')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const customError = require('./config/customError')
const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config({ path: './config/config.env' });
//alternatively we can just require dotenv
//require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser()); //parsing incoming cookies into req.cookies
app.use(cors({
    origin: [process.env.FRONTEND_ORIGIN || 'http://localhost:3000'],
    //allow this origin to talk to the backend
    credentials: true
    //allow cookies to be sent to us
}));
app.use(express.json()); //parsing incoming body into req.body
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

//connect to DB
connectDB();

//require routers
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const secretRouter = require('./routes/secretRouter');
const profileRouter = require('./routes/profileRouter');
const pwResetRouter = require('./routes/pwResetRouter');
const contactUsRouter = require('./routes/contactUsRouter');

//user routers as middlewares
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/secret', secretRouter);
app.use('/profile', profileRouter);
app.use('/reset_password', pwResetRouter);
app.use('/contact', contactUsRouter);

//Error Handling 
app.use((req, res, next) => {
    next(createError(404));
});

//Central Error Handling for internal server error 
app.use(errorHandler = (err, req, res)=> {
    res.status(err.status || 500).json({ error: err.message })
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        console.log(`Application/Server is now listening on port ${port}`);
    }
})

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
//const profileRouter = require('./routes/profileRouter');
const pwResetRouter = require('./routes/pwResetRouter');
const contactUsRouter = require('./routes/contactUsRouter');

//user routers as middlewares
//not going to implement social media account auth in this projects, but there are ready codes in oaRouters and oaControllers
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/secret', secretRouter);
//app.use('/profile', profileRouter);
app.use('/reset_password', pwResetRouter);
app.use('/contact', contactUsRouter);

//a simple test to make sure server works
// app.get('/', (req, res)=>{
//     res.json({"pooh": "bear"})
// })

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        console.log(`Application/Server is now listening on port ${port}`);
    }
})

//Error Handling for 400 
app.use((req, res, next) => {
    next(customError('test error'))
});

//Central Error Handling for internal server error 
//added next to make sure whatever error is forwarded
app.use(errorHandler = (err, req, res, next)=> {
    console.log(err, 'Fxxking ERR!!')
    res.status(err.status || 500).json({ error: err.message })
})



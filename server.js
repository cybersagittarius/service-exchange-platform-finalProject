const express = require('express');
const logger = require('morgan');

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const pwResetRouter = require('./routes/pwResetRouter');
const contactUsRouter = require('./routes/contactUsRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/reset_password', pwResetRouter);
app.use('/contact', contactUsRouter);

const PORT = process.env.PORT || 4000
app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        console.log(`Application now listening on port ${PORT}`);
    }
})

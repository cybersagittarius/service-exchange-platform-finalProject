const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController')

router.post('/', (req, res)=>{

    contactUsController.getContactMSG()
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        console.log(error)
        res.send("Attention! Error in getting the info!")
    })
})

module.exports = router;
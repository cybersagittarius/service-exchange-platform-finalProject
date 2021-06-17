const express = require('express');
const router = express.Router();
const sendEmailController = require('../controllers/sendEmailController') 

router.route('/').post(sendEmailController)

module.exports = router
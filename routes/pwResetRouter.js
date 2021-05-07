const express = require('express');
const router = express.Router();
const pwResetController = require('../controllers/emailControllers/pwResetController')

router.route('/').post(pwResetController)

module.exports = router 
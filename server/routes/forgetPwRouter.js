const express = require('express');
const router = express.Router();
const forgetPwController = require('../controllers/forgetPwController')

router.route('/').post(forgetPwController)

module.exports = router 
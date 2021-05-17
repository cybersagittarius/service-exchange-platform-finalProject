const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const loginController = require('../controllers/loginController')

router.route('/').post(auth, loginController)

module.exports = router
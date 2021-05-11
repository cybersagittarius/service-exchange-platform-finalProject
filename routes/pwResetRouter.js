const express = require('express');
const router = express.Router();
const pwResetController = require('../controllers/pwResetController')

router.route('/').post(pwResetController)


module.exports = router

const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController')

router.route('/').put(logoutController)

module.exports = router;
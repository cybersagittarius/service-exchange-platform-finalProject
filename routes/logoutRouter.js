const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController')

router.route('/').delete(logoutController)


module.exports = router;
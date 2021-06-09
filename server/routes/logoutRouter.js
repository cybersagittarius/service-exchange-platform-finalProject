const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const logoutController = require('../controllers/logoutController')

router.route('/').put(auth, logoutController)

module.exports = router;
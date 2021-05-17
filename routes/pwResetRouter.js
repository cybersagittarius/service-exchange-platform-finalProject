const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const pwResetController = require('../controllers/pwResetController');

router.route('/:token').get(auth, pwResetController)

router.route('/').post(auth, pwResetController)

module.exports = router

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const pwResetController = require('../controllers/pwResetController');

router.route('/:id/:token').get(auth, pwResetController)

router.route('/').post(pwResetController)

module.exports = router

const express = require('express');
const router = express.Router();
const pwResetController = require('../controllers/pwResetController');
// const { route } = require('./contactRouter');

// if we use ('/:token) that means we use params, if not, we use body
// we use post here because we can to be able to receive the body
router.route('/token').post(pwResetController.pwResetCheck)

router.route('/').post(pwResetController.pwReset)

module.exports = router

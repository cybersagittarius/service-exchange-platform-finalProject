const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const profilePwUpdateController = require('../controllers/profilePwUpdateController')

router.route('/').patch(auth, profilePwUpdateController)

module.exports = router
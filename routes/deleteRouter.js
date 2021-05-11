const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const deleteController = require('../controllers/deleteController')

router.route('/').delete( deleteController)


module.exports = router
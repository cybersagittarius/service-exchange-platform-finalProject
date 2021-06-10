const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const searchController = require('../controllers/searchController')

router.route('/').post(searchController)

module.exports = router
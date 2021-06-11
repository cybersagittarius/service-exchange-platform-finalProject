const express = require('express')
const router = express.Router()
const searchController = require('../controllers/searchController')

// router.route('/').get(searchController)

router.route('/').post(searchController)

//router.route('/').patch(searchController)

module.exports = router
const express = require('express')
const router = express.Router()
const findController = require('../controllers/findController')


        
router.route('/').post(findController)

module.export = router
const express = require('express');
const router = express.Router();
const itemSkillsController = require('../controllers/itemSkillsController')

router.route('/').get(itemSkillsController);


module.exports = router;

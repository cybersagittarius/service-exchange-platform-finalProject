const express = require('express');
const router = express.Router();
const itemSkillsSeedController = require('../controllers/itemSkillsSeedController')

router.route('/').post(itemSkillsSeedController);

module.exports = router
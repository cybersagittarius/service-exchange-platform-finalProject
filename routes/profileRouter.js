const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const profileController = require('../controllers/profileController')

router.route('/').get(auth, profileController)

//patch is better, to update just one field
//get req body to update the different fields
router.route('/').patch(auth, profileController)

//BAD PRACTICE, DO NOT DO THIS
// router.route('/user/:username').put(profileController)
// router.route('/user/:firstname').put(profileController)
// router.route('/user/:lastname').put(profileController)
// router.route('/user/:avatar_url').put(profileController)
// router.route('/user/:skills').put(profileController)

module.exports = router;
const express = require('express')
const router = express.Router();
//use for authentication
const auth = require('../auth.js')



const userController = require('../Controllers/userController.js')




// ============= all request route here ===============================================
router.post('/register', userController.userRegistration);
router.post('/login', userController.userLogin);
router.post('/adminRegister', auth.verify, userController.adminRegistration);
router.get('/details', auth.verify, userController.getProfile)

module.exports = router;
const express=require('express');
const UserController=require('../controllers/user');

const { isAuthenticated } = require('../middlewares/index');

const router=express.Router();

router.post("/login",UserController.login);
router.post("/signup",UserController.signup);

router.post('/register', isAuthenticated,UserController.register);

router.get('/getAllRelatives', isAuthenticated, UserController.getAllRelatives);

router.put('/UpdateRegister', isAuthenticated, UserController.updateRegister);

router.get('/me', isAuthenticated, UserController.me);


module.exports = router;



const express=require('express');
const MailController=require('../controllers/mail');
const router=express.Router();

router.post("/mailMessage",MailController.sendMail);

module.exports = router;
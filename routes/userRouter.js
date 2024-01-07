const express = require('express');
const router = express.Router()
const reviewerSignup=require('../controller/reviewerSignup')
const reviewerlogin=require('../controller/reviewerLogin');
const applicantSignup=require('../controller/applicantSignup')
const applicantlogin=require('../controller/applicantLogin')


router.post('/reviewersignup',reviewerSignup)

router.post('/reviewerlogin',reviewerlogin)

router.post('/applicantsignup',applicantSignup)

router.post('/applicantlogin',applicantlogin)



module.exports=router
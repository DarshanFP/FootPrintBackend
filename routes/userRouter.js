const express = require('express');
const router = express.Router()
const reviewerSignup=require('../controller/reviewerSignup')
const reviewerlogin=require('../controller/reviewerLogin');
const applicantSignup=require('../controller/applicantSignup')
const applicantlogin=require('../controller/applicantLogin')
const allReviewerOfProvince=require('../controller/allReviewerOfProvince')
const approverSignup=require('../controller/approverSignup')
const approverlogin=require('../controller/approverLogin')

router.post('/reviewersignup',reviewerSignup)

router.post('/reviewerlogin',reviewerlogin)

router.post('/applicantsignup',applicantSignup)

router.post('/applicantlogin',applicantlogin)

router.post('/approversignup',approverSignup);

router.get('/allreviewer/:province',allReviewerOfProvince);

router.post('/approverlogin',approverlogin)



module.exports=router
const express = require('express');
const router = express.Router()
const reviewerSignup=require('../controller/reviewerSignup')
const reviewerlogin=require('../controller/reviewerLogin');
const applicantSignup=require('../controller/applicantSignup')
const applicantlogin=require('../controller/applicantLogin')
const allReviewerOfProvince=require('../controller/allReviewerOfProvince')
const approverSignup=require('../controller/approverSignup')
const approverlogin=require('../controller/approverLogin')
const reviewerVarify=require('../controller/reviewerVarify')
const reviewerUnvarify=require('../controller/reviewerUnvarify')
const applicantVarify=require('../controller/applicantVarify')
const applicantUnvarify=require('../controller/applicantUnvarify')
const allreviewer=require('../controller/allReviewer')
const allapplicant=require('../controller/allApplicant')
const {protectReviewer}= require('../middleware/authReviewer')
const {protectApprover}=require('../middleware/authApprover')
const {protectApplicant}=require('../middleware/authApplicant');
const getApplicant=require('../controller/getApplicant')
const getReviewer=require('../controller/getReviewer')
const getApprover=require('../controller/getApprover')


router.post('/reviewersignup',reviewerSignup)

router.post('/reviewerlogin',reviewerlogin)

router.post('/applicantsignup',applicantSignup)

router.post('/applicantlogin',applicantlogin)

router.post('/approversignup',approverSignup);

router.get('/allreviewer/:province',allReviewerOfProvince);

router.post('/approverlogin',approverlogin)

router.put('/reviewervarify',protectApprover,reviewerVarify)

router.put('/applicantvarify',protectReviewer,applicantVarify)

router.delete('/reviewerunvarify',protectApprover,reviewerUnvarify)

router.delete('/applicantunvarify',protectReviewer,applicantUnvarify)

router.get('/allreviewer',protectApprover,allreviewer)

router.get('/allapplicant',protectReviewer,allapplicant)

router.get('/getapplicant',protectApplicant,getApplicant);

router.get('/getreviewer',protectReviewer,getReviewer)

router.get('/getapprover',protectApprover,getApprover)




module.exports=router




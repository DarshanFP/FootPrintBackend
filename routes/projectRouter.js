const express = require('express');
const router = express.Router()
const createHOI=require('../controller/createHOI')
const {protectApplicant}=require('../middleware/authApplicant');
const {protectReviewer}= require('../middleware/authReviewer')
const {protectApprover}=require('../middleware/authApprover')
const editHOIreviewer=require('../controller/editHOIreviewer');
const editHOIapprover = require('../controller/editHOIapprover');
const createEOI=require('../controller/createEOI');
const editEOIreviewer=require('../controller/editEOIreviewer');
const editEOIapprover=require('../controller/editEOIapprover')



router.post('/createHOI',protectApplicant,createHOI);

router.post('/createEOI',protectApplicant,createEOI)

router.put('/editreviewerHOI',protectReviewer,editHOIreviewer)

router.put('/editapproverHOI',protectApprover,editHOIapprover)

router.put('/editreviewerEOI',protectReviewer,editEOIreviewer)


router.put('/editapproverEOI',protectApprover,editEOIapprover)



module.exports=router
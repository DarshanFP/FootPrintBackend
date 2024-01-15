const express = require('express');
const router = express.Router()
const createHOI=require('../controller/createHOI')
const {protectApplicant}=require('../middleware/authApplicant');
const {protectReviewer}= require('../middleware/authReviewer')
const {protectApprover}=require('../middleware/authApprover')
const editHOIreviewer=require('../controller/editHOIreviewer');
const editHOIapprover = require('../controller/editHOIapprover');
const createEOI=require('../controller/createEOI');
const createLOI=require('../controller/createLOI')
const editEOIreviewer=require('../controller/editEOIreviewer');
const editEOIapprover=require('../controller/editEOIapprover')
const editLOIapprover=require('../controller/editLOIapprover');
const editLOIreviewer=require('../controller/editLOIreviewer')


router.post('/createHOI',protectApplicant,createHOI);

router.post('/createEOI',protectApplicant,createEOI)

router.post('/createLOI',protectApplicant,createLOI)

router.put('/editreviewerHOI',protectReviewer,editHOIreviewer)

router.put('/editapproverHOI',protectApprover,editHOIapprover)

router.put('/editreviewerEOI',protectReviewer,editEOIreviewer)


router.put('/editapproverEOI',protectApprover,editEOIapprover)

router.put('/editreviewerLOI',protectReviewer,editLOIreviewer);

router.put('/editapproverLOI',protectApprover,editLOIapprover)



module.exports=router
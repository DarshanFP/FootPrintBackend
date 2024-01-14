const express = require('express');
const router = express.Router()
const createHOI=require('../controller/createHOI')
const {protectApplicant}=require('../middleware/authApplicant');
const {protectReviewer}= require('../middleware/authReviewer')
const {protectApprover}=require('../middleware/authApprover')
const editHOIreviewer=require('../controller/editHOIreviewer');
const editHOIapprover = require('../controller/editHOIapprover');

router.post('/createHOI',protectApplicant,createHOI);

router.put('/editreviewer',protectReviewer,editHOIreviewer)

router.put('/editapprover',protectApprover,editHOIapprover)

module.exports=router
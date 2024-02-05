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
const getallHOIapplicant=require('../controller/getallHOIapplicant');
const getallEOIapplicant=require('../controller/getallEOIapplicant')
const getallLOIapplicant=require('../controller/getallLOIapplicant')
const getallHOIreviewer=require('../controller/getallHOIreviewer')
const getallEOIreviewer=require('../controller/getallEOIreviewer')
const getallLOIreviewer=require('../controller/getallLOIreviewer')
const getallHOIapprover=require('../controller/getallHOIapprover')
const getallEOIapprover=require('../controller/getallEOIapprover')
const getallLOIapprover=require('../controller/getallLOIapprover')
const createSI=require('../controller/createSI')
const editedSIapprover=require('../controller/editSIapprover')
const editedSIreviewer=require('../controller/editSIreviewer')
const getallSIapplicant=require('../controller/getallSIapplicant')
const getallSIreviewer=require('../controller/getallSIreviewer')
const getallSIapprover=require('../controller/getallSIapprover')
const getallEIapprover=require('../controller/getallEIapprover')
const createEI=require('../controller/createEI')
const editEIapprover=require('../controller/editEIapprover')
const editEIreviewer=require('../controller/editEIreviewer')
const getallEIreviewer=require('../controller/getallEIreviewer')
const getallEIapplicant=require('../controller/getallEIapplicant')
const createDPLG=require('../controller/createDPLG')
const editDPLGapprover=require('../controller/editDPLGapprover')
const editEGapprover=require('../controller/editEGapprover')
const editDPLGreviewer=require('../controller/editDPLGreviewer')
const editEGreviewer=require('../controller/editEGreviewer')
const getallDPLGapplicant=require('../controller/getallDPLGapplicant')
const getallDPLGreviewer=require('../controller/getallDPLGreviewer')
const getallDPLGapprover=require('../controller/getallDPLGapprover')
const createEG=require('../controller/createEG')
const getallEGapplicant=require('../controller/getallEGapplicant')
const getallEGapprover=require('../controller/getallEGapprover')
const getallEGreviewer=require('../controller/getallEGreviewer')
const createISG=require('../controller/createISG')
const editISGapprover=require('../controller/editISGapprover')
const editISGreviewer=require('../controller/editISGreviewer')
const getallISGapplicant=require('../controller/getallISGapplicant')
const getallISGapprover=require('../controller/getallISGapprover')
const getallISGreviewer=require('../controller/getallISGreviewer')
const createCG=require('../controller/createCG')
const editCGapprover=require('../controller/editCGapprover')
const editCGreviewer=require('../controller/editCGreviewer')

const getallCGapplicant=require('../controller/getallCGapplicant')
const getallCGapprover=require('../controller/getallCGapprover')
const getallCGreviewer=require('../controller/getallCGreviewer')
const editCG=require('../controller/editCG')
const editDPLG=require('../controller/editDPLG')
const editEG=require('../controller/editEG')
const editEI=require('../controller/editEI')
// donC
router.post('/createHOI',protectApplicant,createHOI);
router.post('/createEOI',protectApplicant,createEOI)
router.post('/createLOI',protectApplicant,createLOI)
router.post('/createSI',protectApplicant,createSI)
router.post('/createEI',protectApplicant,createEI)
router.post('/createDPLG',protectApplicant,createDPLG)
router.post('/createEG',protectApplicant,createEG)
router.post('/createISG',protectApplicant,createISG)
router.post('/createCG',protectApplicant,createCG)

router.put('/editreviewerHOI',protectReviewer,editHOIreviewer)
router.put('/editreviewerISG',protectReviewer,editISGreviewer)
router.put('/editreviewerCG',protectReviewer,editCGreviewer)
router.put('/editapproverHOI',protectApprover,editHOIapprover)

router.put('/editreviewerEOI',protectReviewer,editEOIreviewer)
router.put('/editapproverEOI',protectApprover,editEOIapprover)
router.put('/editapproverISG',protectApprover,editISGapprover)
router.put('/editapproverCG',protectApprover,editCGapprover)

router.put('/editreviewerLOI',protectReviewer,editLOIreviewer);
router.put('/editapproverLOI',protectApprover,editLOIapprover)

router.get('/getallHOIapplicant',protectApplicant,getallHOIapplicant)
router.get('/getallEOIapplicant',protectApplicant,getallEOIapplicant)
router.get('/getallLOIapplicant',protectApplicant,getallLOIapplicant)
router.get('/getallHOIreviewer',protectReviewer,getallHOIreviewer)
router.get('/getallEOIreviewer',protectReviewer,getallEOIreviewer)
router.get('/getallLOIreviewer',protectReviewer,getallLOIreviewer)

router.get('/getallHOIapprover',protectApprover,getallHOIapprover)
router.get('/getallEOIapprover',protectApprover,getallEOIapprover)
router.get('/getallLOIapprover',protectApprover,getallLOIapprover)
router.put('/editapproverSI',protectApprover,editedSIapprover)
router.put('/editreviewerSI',protectReviewer,editedSIreviewer)
router.get('/getallSIapplicant',protectApplicant,getallSIapplicant)
router.get('/getallSIreviewer',protectReviewer,getallSIreviewer)
router.get('/getallSIapprover',protectApprover,getallSIapprover)
router.put('/editapproverEI',protectApplicant,editEIapprover)
router.put('/editreviewerEI',protectReviewer,editEIreviewer)

router.get('/getallEIapprover',protectApprover,getallEIapprover)
router.get('/getallEIreviewer',protectReviewer,getallEIreviewer)
router.get('/getallEIapplicant',protectApplicant,getallEIapplicant)
router.put('/editapproverDPLG',protectApprover,editDPLGapprover)
router.put('/editreviewerDPLG',protectReviewer,editDPLGreviewer)
router.get('/getallDPLGapplicant',protectApplicant,getallDPLGapplicant)
router.get('/getallDPLGreviewer',protectReviewer,getallDPLGreviewer)
router.get('/getallDPLGapprover',protectApprover,getallDPLGapprover)

router.get('/getallCGapplicant',protectApplicant,getallCGapplicant)
router.get('/getallCGreviewer',protectReviewer,getallCGreviewer)
router.get('/getallCGapprover',protectApprover,getallCGapprover)


router.get('/getallISGapplicant',protectApplicant,getallISGapplicant)
router.get('/getallISGapprover',protectApprover,getallISGapprover)
router.get('/getallISGreviewer',protectReviewer,getallISGreviewer)

router.put('/editapproverEG',protectApprover,editEGapprover)
router.put('/editreviewerEG',protectApprover,editEGreviewer)
router.get('/getallEGapplicant',protectApplicant,getallEGapplicant)
router.get('/getallEGapprover',protectApplicant,getallEGapprover)
router.get('/getallEGreviewer',protectReviewer,getallEGreviewer)




router.put('/editCG',protectApplicant,editCG)
router.put('/editDPLG',protectApplicant,editDPLG)
router.put('/editEG',protectApplicant,editEG)
router.put('/editEI',protectApplicant,editEI)
module.exports=router
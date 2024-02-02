const createHOI = require("../controller/createHOI");
const { protectApplicant } = require("../middleware/authApplicant");
const { protectReviewer } = require("../middleware/authReviewer");
const { protectApprover } = require("../middleware/authApprover");
const editHOIreviewer = require("../controller/editHOIreviewer");
const editHOIapprover = require("../controller/editHOIapprover");
const createEOI = require("../controller/createEOI");
const createLOI = require("../controller/createLOI");
const editEOIreviewer = require("../controller/editEOIreviewer");
const editEOIapprover = require("../controller/editEOIapprover");
const editLOIapprover = require("../controller/editLOIapprover");
const editLOIreviewer = require("../controller/editLOIreviewer");
const getallHOIapplicant = require("../controller/getallHOIapplicant");
const getallEOIapplicant = require("../controller/getallEOIapplicant");
const getallLOIapplicant = require("../controller/getallLOIapplicant");
const getallHOIreviewer = require("../controller/getallHOIreviewer");
const getallEOIreviewer = require("../controller/getallEOIreviewer");
const getallLOIreviewer = require("../controller/getallLOIreviewer");
const getallHOIapprover = require("../controller/getallHOIapprover");
const getallEOIapprover = require("../controller/getallEOIapprover");
const getallLOIapprover = require("../controller/getallLOIapprover");
const createSI = require("../controller/createSI");
const editedSIapprover = require("../controller/editSIapprover");
const editedSIreviewer = require("../controller/editSIreviewer");
const getallSIapplicant = require("../controller/getallSIapplicant");
const getallSIreviewer = require("../controller/getallSIreviewer");
const getallSIapprover = require("../controller/getallSIapprover");
const getallEIapprover = require("../controller/getallEIapprover");
const createEI = require("../controller/createEI");
const editEIapprover = require("../controller/editEIapprover");
const editEIreviewer = require("../controller/editEIreviewer");
const getallEIreviewer = require("../controller/getallEIreviewer");
const getallEIapplicant = require("../controller/getallEIapplicant");
const createDPLG = require("../controller/createDPLG");
const editDPLGapprover = require("../controller/editDPLGapprover");
const editDPLGreviewer = require("../controller/editDPLGreviewer");
const getallDPLGapplicant = require("../controller/getallDPLGapplicant");
const getallDPLGreviewer = require("../controller/getallDPLGreviewer");
const getallDPLGapprover = require("../controller/getallDPLGapprover");
const createWHFC = require("../controller/welfare_home_for_child/api/createWHFC");
const getAllWHFCApplicant = require("../controller/welfare_home_for_child/api/getAllWHFCApplicant");
const getAllWHFCApprover = require("../controller/welfare_home_for_child/api/getAllWHFCApprover");
const getAllWHFCReviewer = require("../controller/welfare_home_for_child/api/getAllWHFCReviewer");
const createEGS = require("../controller/educational_group_support_schema/api/createEGS");
const editEGSApplicant = require("../controller/educational_group_support_schema/api/editEGSApplicant");
const editEGSApprover = require("../controller/educational_group_support_schema/api/editEGSApprover");
const editEGSReviewer = require("../controller/educational_group_support_schema/api/editEGSReviewer");
const getAllEGSApplicant = require("../controller/educational_group_support_schema/api/getAllEGSApplicant");
const getAllEGSApprover = require("../controller/educational_group_support_schema/api/getAllEGSApprover");
const getAllEGSReviewer = require("../controller/educational_group_support_schema/api/getAllEGSReviewer");
const createNPDP = require("../controller/next_phase_of_development/api/createNPDP");
const editWHFCApplicant = require('../controller/welfare_home_for_child/api/editWHFCApplicant');
const editWHFCReviewer = require('../controller/welfare_home_for_child/api/editWHFCReviewer');
const editWHFCApprover = require('../controller/welfare_home_for_child/api/editWHFCApprover');
const editNPDPApplicant = require("../controller/next_phase_of_development/api/editNPDPApplicant");
const editNPDPApprover = require("../controller/next_phase_of_development/api/editNPDPApprover");
const editNPDPReviewer = require("../controller/next_phase_of_development/api/editNPDPReviewer");
const getAllNPDPApplicant = require("../controller/next_phase_of_development/api/getAllNPDPApplicant");
const getAllNPDPApprover = require("../controller/next_phase_of_development/api/getAllNPDPApprover");
const getAllNPDPReviewer = require("../controller/next_phase_of_development/api/getAllNPDPReviewer");
const createHIV = require("../controller/hiv_affected_outreach/api/createHIV");
const editHIVApplicant = require("../controller/hiv_affected_outreach/api/editHIVApplicant");
const editHIVApprover = require("../controller/hiv_affected_outreach/api/editHIVApprover");
const editHIVReviewer = require("../controller/hiv_affected_outreach/api/editHIVReviewer");
const getAllHIVApplicant = require("../controller/hiv_affected_outreach/api/getAllHIVApplicant");
const getAllHIVApprover = require("../controller/hiv_affected_outreach/api/getAllHIVApprover");
const getAllHIVReviewer = require("../controller/hiv_affected_outreach/api/getAllHIVReviewer");

router.post("/createSI", protectApplicant, createSI);
router.post("/createEI", protectApplicant, createEI);
router.post("/createDPLG", protectApplicant, createDPLG);


// done
router.post("/createHOI", protectApplicant, createHOI);
router.post("/createEOI", protectApplicant, createEOI);
router.post("/createLOI", protectApplicant, createLOI);

// WHFC
router.post("/createWHFC", protectApplicant, createWHFC);
router.get("/getAllWHFCApplicant", protectApplicant, getAllWHFCApplicant);
router.get("/getAllWHFCReviewer", protectReviewer, getAllWHFCReviewer);
router.get("/getAllWHFCApprover", protectApprover, getAllWHFCApprover);
router.put('/editWHFCApplicant' , protectApplicant, editWHFCApplicant)
router.put('/editWHFCReviewer' , protectReviewer, editWHFCReviewer);     
router.put('/editWHFCApprover' , protectApprover, editWHFCApprover);     


// EGS
router.post("/createEGS", protectApplicant , createEGS);
router.get("/editEGSApplicant", protectApplicant, editEGSApplicant);
router.get("/editEGSApprover", protectApprover , editEGSApprover);
router.get("/editEGSReviewer", protectReviewer , editEGSReviewer);
router.put("/getAllEGSApplicant", protectApplicant, getAllEGSApplicant);
router.put("/getAllEGSApprover", protectApprover , getAllEGSApprover);
router.put("/getAllEGSReviewer", protectReviewer, getAllEGSReviewer);

//NPDP
router.post("/createEGS", protectApplicant , createNPDP);
router.get("/editNPDPApplicant", protectApplicant, editNPDPApplicant);
router.get("/editNPDPApprover", protectApprover , editNPDPApprover);
router.get("/editNPDPReviewer", protectReviewer , editNPDPReviewer);
router.put("/getAllNPDPApprover", protectApprover , getAllNPDPApprover);
router.put("/getAllNPDPApplicant", protectApplicant, getAllNPDPApplicant);
router.put("/getAllNPDPReviewer", protectReviewer, getAllNPDPReviewer);

//HIV
router.post("/createHIV", protectApplicant , createHIV);
router.get("/editHIVApplicant", protectApplicant, editHIVApplicant);
router.get("/editHIVApprover", protectApprover , editHIVApprover);
router.get("/editHIVReviewer", protectReviewer , editHIVReviewer);
router.put("/getAllHIVApplicant", protectApplicant, getAllHIVApplicant);
router.put("/getAllHIVApprover", protectApprover , getAllHIVApprover);
router.put("/getAllHIVReviewer", protectReviewer, getAllHIVReviewer);

// done
router.put("/editreviewerHOI", protectReviewer, editHOIreviewer);
router.put("/editapproverHOI", protectApprover, editHOIapprover);

// done
router.put("/editreviewerEOI", protectReviewer, editEOIreviewer);
router.put("/editapproverEOI", protectApprover, editEOIapprover);

// done
router.put("/editreviewerLOI", protectReviewer, editLOIreviewer);
router.put("/editapproverLOI", protectApprover, editLOIapprover);

router.get("/getallHOIapplicant", protectApplicant, getallHOIapplicant);
router.get("/getallEOIapplicant", protectApplicant, getallEOIapplicant);
router.get("/getallLOIapplicant", protectApplicant, getallLOIapplicant);
router.get("/getallHOIreviewer", protectReviewer, getallHOIreviewer);
router.get("/getallEOIreviewer", protectReviewer, getallEOIreviewer);
router.get("/getallLOIreviewer", protectReviewer, getallLOIreviewer);

router.get("/getallHOIapprover", protectApprover, getallHOIapprover);
router.get("/getallEOIapprover", protectApprover, getallEOIapprover);
router.get("/getallLOIapprover", protectApprover, getallLOIapprover);
router.put("/editapproverSI", protectApprover, editedSIapprover);
router.put("/editreviewerSI", protectReviewer, editedSIreviewer);
router.get("/getallSIapplicant", protectApplicant, getallSIapplicant);
router.get("/getallSIreviewer", protectReviewer, getallSIreviewer);
router.get("/getallSIapprover", protectApprover, getallSIapprover);
router.put("/editapproverEI", protectApplicant, editEIapprover);
router.put("/editreviewerEI", protectReviewer, editEIreviewer);

router.get("/getallEIapprover", protectApprover, getallEIapprover);
router.get("/getallEIreviewer", protectReviewer, getallEIreviewer);
router.get("/getallEIapplicant", protectApplicant, getallEIapplicant);
router.put("/editapproverDPLG", protectApprover, editDPLGapprover);
router.put("/editreviewerDPLG", protectReviewer, editDPLGreviewer);
router.get("/getallDPLGapplicant", protectApplicant, getallDPLGapplicant);
router.get("/getallDPLGreviewer", protectReviewer, getallDPLGreviewer);
router.get("/getallDPLGapprover", protectApprover, getallDPLGapprover);

router.get('/getallEIapprover',protectApprover,getallEIapprover)
router.get('/getallEIreviewer',protectReviewer,getallEIreviewer)
router.get('/getallEIapplicant',protectApplicant,getallEIapplicant)
router.put('/editapproverDPLG',protectApprover,editDPLGapprover)
router.put('/editreviewerDPLG',protectReviewer,editDPLGreviewer)
router.get('/getallDPLGapplicant',protectApplicant,getallDPLGapplicant)
router.get('/getallDPLGreviewer',protectReviewer,getallDPLGreviewer)
router.get('/getallDPLGapprover',protectApprover,getallDPLGapprover)

router.put('/editapproverEG',protectApprover,editEGapprover)
router.put('/editreviewerEG',protectApprover,editEGreviewer)
router.get('/getallEGapplicant',protectApplicant,getallEGapplicant)
router.get('/getallEGapprover',protectApplicant,getallEGapprover)
router.get('/getallEGreviewer',protectReviewer,getallEGreviewer)
module.exports=router

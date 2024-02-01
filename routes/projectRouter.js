const express = require("express");
const router = express.Router();
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
const createWHFC = require("../controller/welfare_home_for_child/api/createWHFC");
const getAllWHFCApplicant = require("../controller/welfare_home_for_child/api/getAllWHFCApplicant");
const getAllWHFCApprover = require("../controller/welfare_home_for_child/api/getAllWHFCApprover");
const getAllWHFCReviewer = require("../controller/welfare_home_for_child/api/getAllWHFCReviewer");
const createEGS = require('../controller/educational_group_support_schema/api/createEGS');
const createNPDP = require('../controller/next_phase_of_development/api/createNPDP');

// done
router.post("/createHOI", protectApplicant, createHOI);
router.post("/createEOI", protectApplicant, createEOI);
router.post("/createLOI", protectApplicant, createLOI);

// new
router.post("/createWHFC", protectApplicant , createWHFC);
router.get("/getAllWHFCApplicant", protectApplicant, getAllWHFCApplicant);
router.get("/getAllWHFCReviewer", protectReviewer, getAllWHFCReviewer);
router.get("/getAllWHFCApprover", protectApprover, getAllWHFCApprover);
// router.put('/edit')

// new 
router.post('/createEGS' , createEGS) ; 

// 
router.post('/createNPDP' , protectApplicant , createNPDP) ; 

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
// done
router.get("/getallHOIreviewer", protectReviewer, getallHOIreviewer);
router.get("/getallEOIreviewer", protectReviewer, getallEOIreviewer);
router.get("/getallLOIreviewer", protectReviewer, getallLOIreviewer);
// done
router.get("/getallHOIapprover", protectApprover, getallHOIapprover);
router.get("/getallEOIapprover", protectApprover, getallEOIapprover);
router.get("/getallLOIapprover", protectApprover, getallLOIapprover),
  (module.exports = router);

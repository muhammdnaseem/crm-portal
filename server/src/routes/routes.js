// routes.js
const express = require("express");
const router = express.Router();
const { setUser, getUser, updateUser, deleteUser } = require("../controllers/usersController");
const { setProject, getProject, updateProject, deleteProject } = require("../controllers/projectsController");
const { setBlock, getBlock, updateBlock, deleteBlock } = require("../controllers/blocksController");
const { setAgent, getAgent, updateAgent, deleteAgent } = require("../controllers/agentsController");
const { setCategory, getCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");
const { setAllotment, getAllotment, updateAllotment, deleteAllotment } = require("../controllers/allotmentController");
const { setFeature, getFeature, updateFeature, deleteFeature } = require("../controllers/featuresController");
const { setInventory, getInventory, updateInventory, deleteInventory } = require("../controllers/inventoryController");
const { setFee, getFee, updateFee, deleteFee } = require("../controllers/feeController");
const { setRole, getRole, updateRole, deleteRole } = require("../controllers/roleController");
const { setLead, getLead, updateLead, deleteLead } = require("../controllers/leadController");
const { setToken, getToken, updateToken, deleteToken } = require("../controllers/tokenController");
const { setNominee, getNominee } = require("../controllers/nomineeController");
const { setBooking, getBooking, updateBooking, deleteBooking } = require("../controllers/bookingformController");
const { setInstallment, getInstallment, updateInstallment, deleteInstallment } = require("../controllers/installationController");
const { setTransfer, getTransfer, updateTransfer, deleteTransfer } = require("../controllers/transferController");
const { setCancellation, getCancellation, updateCancellation, deleteCancellation } = require("../controllers/cancellationController");
const { setInstallmentPeriod, getInstallmentPeriod, updateInstallmentPeriod, deleteInstallmentPeriod } = require("../controllers/installmentPeriodController");
const { setInstallmentType, getInstallmentType, updateInstallmentType, deleteInstallmentType } = require("../controllers/installmentTypeController");
const { setMerge, getMerge, updateMerge, deleteMerge } = require("../controllers/mergeController");
const { getCustomer } = require("../controllers/customerController");
const { getAdmin } = require("../controllers/adminController");




// Use the middleware before the setUsers route
router.route("/").get(setUser);
router.route("/getusercrediantial").get(getAdmin);
router.route("/users").post(setUser);
router.route("/getusers").get(getUser);
router.route("/update/usersdata").post(updateUser);
router.route("/delete/usersdata").post(deleteUser);

router.route("/projects").post(setProject);
router.route("/getprojects").get(getProject);
router.route("/update/projectsdata").post(updateProject);
router.route("/delete/projectsdata").post(deleteProject);

router.route("/projects").post(setProject);
router.route("/getprojects").get(getProject);
router.route("/update/projectsdata").post(updateProject);
router.route("/delete/projectsdata").post(deleteProject);

router.route("/blocks").post(setBlock);
router.route("/getblocks").get(getBlock);
router.route("/update/blocksdata").post(updateBlock);
router.route("/delete/blocksdata").post(deleteBlock);

router.route("/agents").post(setAgent);
router.route("/getagents").get(getAgent);
router.route("/update/agentsdata").post(updateAgent);
router.route("/delete/agentsdata").post(deleteAgent);

router.route("/categories").post(setCategory);
router.route("/getcategories").get(getCategory);
router.route("/update/categoriesdata").post(updateCategory);
router.route("/delete/categoriesdata").post(deleteCategory);

router.route("/features").post(setFeature);
router.route("/getfeatures").get(getFeature);
router.route("/update/featuresdata").post(updateFeature);
router.route("/delete/featuresdata").post(deleteFeature);

router.route("/inventory").post(setInventory);
router.route("/getinventory").get(getInventory);
router.route("/update/inventorydata").post(updateInventory);
router.route("/delete/inventorydata").post(deleteInventory);

router.route("/fee").post(setFee);
router.route("/getfee").get(getFee);
router.route("/update/feesdata").post(updateFee);
router.route("/delete/feesdata").post(deleteFee);

router.route("/role").post(setRole);
router.route("/getrole").get(getRole);
router.route("/update/rolesdata").post(updateRole);
router.route("/delete/rolesdata").post(deleteRole);

router.route("/lead").post(setLead);
router.route("/getlead").get(getLead);
router.route("/update/leadsdata").post(updateLead);
router.route("/delete/leadsdata").post(deleteLead);

router.route("/token").post(setToken);
router.route("/gettoken").get(getToken);
router.route("/update/tokensdata").post(updateToken);
router.route("/delete/tokensdata").post(deleteToken);

router.route("/nominee").post(setNominee);
router.route("/getnominee").get(getNominee);

router.route("/booking").post(setBooking);
router.route("/getbooking").get(getBooking);
router.route("/update/bookingdata").post(updateBooking);
router.route("/delete/bookingdata").post(deleteBooking);

router.route("/installment").post(setInstallment);
router.route("/getinstallment").get(getInstallment);
router.route("/update/installmentsdata").post(updateInstallment);
router.route("/delete/installmentsdata").post(deleteInstallment);


router.route("/allotment").post(setAllotment);
router.route("/getallotment").get(getAllotment);
router.route("/update/allotmentsdata").post(updateAllotment);
router.route("/delete/allotmentsdata").post(deleteAllotment);

router.route("/transfer").post(setTransfer);
router.route("/gettransfer").get(getTransfer);
router.route("/update/transfersdata").post(updateTransfer);
router.route("/delete/transfersdata").post(deleteTransfer);


router.route("/mergerequest").post(setMerge);
router.route("/getmergerequest").get(getMerge);
router.route("/update/mergerequestsdata").post(updateMerge);
router.route("/delete/mergerequestsdata").post(deleteMerge);



router.route("/cancellation").post(setCancellation);
router.route("/getcancellation").get(getCancellation);
router.route("/update/cancellationdata").post(updateCancellation);
router.route("/delete/cancellationdata").post(deleteCancellation);

router.route("/installmentperiod").post(setInstallmentPeriod);
router.route("/getinstallmentperiod").get(getInstallmentPeriod);
router.route("/update/installmentperioddata").post(updateInstallmentPeriod);
router.route("/delete/installmentperioddata").post(deleteInstallmentPeriod);

router.route("/installmenttype").post(setInstallmentType);
router.route("/getinstallmenttype").get(getInstallmentType);
router.route("/update/installmenttypedata").post(updateInstallmentType);
router.route("/delete/installmenttypedata").post(deleteInstallmentType);


router.route("/getcustomer").get(getCustomer);


module.exports = router;

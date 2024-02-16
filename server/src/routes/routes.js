// routes.js
const express = require("express");
const router = express.Router();
const { setUser, getUser, updateUser, deleteUser } = require("../controllers/usersController");
const { setProject, getProject, updateProject, deleteProject } = require("../controllers/projectsController");
const { setBlock, getBlock, updateBlock, deleteBlock } = require("../controllers/blocksController");
const { setAgent, getAgent, updateAgent, deleteAgent } = require("../controllers/agentsController");
const { setCategory, getCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");
const { setFeature, getFeature, updateFeature, deleteFeature } = require("../controllers/featuresController");
const { setInventory, getInventory, updateInventory, deleteInventory } = require("../controllers/inventoryController");
const { setFee, getFee, updateFee, deleteFee } = require("../controllers/feeController");
const { setRole, getRole, updateRole, deleteRole } = require("../controllers/roleController");
const { setLead, getLead, updateLead, deleteLead } = require("../controllers/leadController");
const { setToken, getToken, updateToken, deleteToken } = require("../controllers/tokenController");
const { setNominee, getNominee } = require("../controllers/nomineeController");
const { setBooking, getBooking } = require("../controllers/bookingformController");
const { setInstallment, getInstallment, updateInstallment, deleteInstallment } = require("../controllers/installationController");
const { setTransfer, getTransfer } = require("../controllers/transferController");
const { setMerge, getMerge } = require("../controllers/mergeController");
const { setCancellation, getCancellation } = require("../controllers/cancellationController");
const { setInstallmentPeriod, getInstallmentPeriod, updateInstallmentPeriod, deleteInstallmentPeriod } = require("../controllers/installmentPeriodController");
const { setInstallmentType, getInstallmentType, updateInstallmentType, deleteInstallmentType } = require("../controllers/installmentTypeController");




// Use the middleware before the setUsers route
router.route("/").get(setUser);
router.route("/users").post(setUser);
router.route("/getusers").get(getUser);
router.route("/update/usersdata").post(updateUser);
router.route("/delete/usersdata").post(deleteUser);

router.route("/projects").post(setProject);
router.route("/getprojects").get(getProject);
router.route("/update/projectsdata").post(updateProject);
router.route("/delete/projectsdata").post(deleteProject);

router.route("/blocks").post(setBlock);
router.route("/getblocks").get(getBlock);
router.route("/update/projectsdata").post(updateProject);
router.route("/delete/projectsdata").post(deleteProject);

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

router.route("/installment").post(setInstallment);
router.route("/getinstallment").get(getInstallment);
router.route("/update/installmentsdata").post(updateInstallment);
router.route("/delete/installmentsdata").post(deleteInstallment);

router.route("/transfer").post(setInstallment);
router.route("/gettransfer").get(getInstallment);

router.route("/mergerequest").post(setMerge);
router.route("/cancellation").get(setCancellation);

router.route("/installmentperiod").get(setInstallmentPeriod);
router.route("/getinstallmentperiod").get(getInstallmentPeriod);
router.route("/update/installmentperioddata").post(updateInstallmentPeriod);
router.route("/delete/installmentperioddata").post(deleteInstallmentPeriod);

router.route("/installmenttype").get(setInstallmentType);
router.route("/getinstallmenttype").get(getInstallmentType);
router.route("/update/installmenttypedata").post(updateInstallmentType);
router.route("/delete/installmenttypedata").post(deleteInstallmentType);


module.exports = router;

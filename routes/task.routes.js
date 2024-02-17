const { Router } = require("express");
const router = Router();
const taskController = require("../controllers/User/taskController");
const { checkGuestAccess } = require("../middleware/checkGuestAccess");
const { checkUserPermission } = require("../middleware/checkUserPermission");

router.post("/createContact", checkGuestAccess(),taskController.createContact);
router.get("/getAllContacts",checkUserPermission(), taskController.getAllContacts);
router.get("/getContactById/:id",checkUserPermission(), taskController.getContactById);
router.put("/updateContact/:id",checkUserPermission(), taskController.updateContact);

router.post("/createCareer", checkGuestAccess(),taskController.createCareer);
router.get("/getAllCareers",checkUserPermission(), taskController.getAllCareers);
router.get("/getCareerById/:id",checkUserPermission(), taskController.getCareerById);
router.put("/updateCareer/:id",checkUserPermission(), taskController.updateCareer);

module.exports = router;

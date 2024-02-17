const { Router } = require("express");
const userController = require("../controllers/User/userController");

const router = Router();

router.get("/getUser", userController.getUser);
// router.get("/getDashboard", userController.getDashboard);
// router.get("/getRecentTasks", userController.getRecentTasks);

module.exports = router;

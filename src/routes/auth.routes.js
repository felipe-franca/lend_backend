const router = require("express").Router();
const authController = require('../controllers/AuthController');

router.route("/register").post(authController.registerAction);
router.route("/sign-in").post(authController.signIn);

module.exports = router;
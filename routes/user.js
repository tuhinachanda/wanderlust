const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware");
const usersController = require("../controllers/users");

router
  .route("/signup")
  .get(usersController.renderSignup)
  .post(wrapAsync(usersController.signup));

router
  .route("/login")
  .get(usersController.renderLogin)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true
    }),
    usersController.login
  );

router.get("/logout", usersController.logout);

module.exports = router;

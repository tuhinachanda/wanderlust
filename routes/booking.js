const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn } = require("../middleware");
const bookingController = require("../controllers/bookings");

router.get("/", isLoggedIn, wrapAsync(bookingController.index));
router.post(
  "/:bookingId/cancel",
  isLoggedIn,
  wrapAsync(bookingController.cancelBooking)
);

module.exports = router;

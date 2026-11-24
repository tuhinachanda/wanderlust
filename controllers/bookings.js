const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.createBooking = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  const { checkIn, checkOut, guests } = req.body.booking;
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);

  if (isNaN(inDate.getTime()) || isNaN(outDate.getTime())) {
    req.flash("error", "Invalid check-in or check-out date!");
    return res.redirect(`/listings/${id}`);
  }

  if (outDate <= inDate) {
    req.flash("error", "Check-out date must be after check-in date!");
    return res.redirect(`/listings/${id}`);
  }

  const diffTime = Math.abs(outDate - inDate);
  const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const totalPrice = diffDays * listing.price;

  const newBooking = new Booking({
    listing: id,
    user: req.user._id,
    checkIn: inDate,
    checkOut: outDate,
    guests: Number(guests) || 1,
    totalPrice
  });

  await newBooking.save();
  req.flash(
    "success",
    `Booking confirmed for ${diffDays} night${diffDays > 1 ? "s" : ""}! Total: ₹${totalPrice.toLocaleString("en-IN")}`
  );
  res.redirect("/bookings");
};

module.exports.index = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate({
      path: "listing",
      populate: {
        path: "owner"
      }
    })
    .sort({ createdAt: -1 });

  res.render("bookings/index.ejs", { bookings });
};

module.exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;
  const booking = await Booking.findById(bookingId);
  if (!booking) {
    req.flash("error", "Booking not found!");
    return res.redirect("/bookings");
  }

  if (!booking.user.equals(req.user._id)) {
    req.flash("error", "You do not have permission to cancel this booking!");
    return res.redirect("/bookings");
  }

  booking.status = "Cancelled";
  await booking.save();
  req.flash("success", "Booking has been cancelled.");
  res.redirect("/bookings");
};

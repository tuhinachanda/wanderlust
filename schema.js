const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().trim().required(),
    description: Joi.string().allow("", null),
    location: Joi.string().trim().required(),
    country: Joi.string().trim().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
    category: Joi.string()
      .valid(
        "Trending",
        "Rooms",
        "Iconic Cities",
        "Mountains",
        "Castles",
        "Amazing Pools",
        "Camping",
        "Farms",
        "Arctic",
        "Beach",
        "Boats"
      )
      .allow("", null)
  }).required()
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().trim().required()
  }).required()
});

module.exports.bookingSchema = Joi.object({
  booking: Joi.object({
    checkIn: Joi.date().iso().required().messages({
      "date.base": "Check-in date must be a valid date",
      "any.required": "Check-in date is required"
    }),
    checkOut: Joi.date().iso().greater(Joi.ref("checkIn")).required().messages({
      "date.greater": "Check-out date must be after check-in date",
      "date.base": "Check-out date must be a valid date",
      "any.required": "Check-out date is required"
    }),
    guests: Joi.number().integer().min(1).required().messages({
      "number.min": "At least 1 guest is required",
      "number.base": "Number of guests must be a number"
    })
  }).required()
});

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact");
const router = require("express").Router();
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(203).json({
      name,
      email,
      phone,
    });
  })
);
module.exports = router;

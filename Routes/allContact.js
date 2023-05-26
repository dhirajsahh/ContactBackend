const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const contact = require("../models/contact");
router.get(
  "/",

  asyncHandler(async (req, res) => {
    const Contact = await contact.find();
    if (!Contact) {
      throw new Error("Contact not found");
    }
    res.json({
      Contact,
    });
  })
);
module.exports = router;

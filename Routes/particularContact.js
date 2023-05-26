const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const contact = require("../models/contact");
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    id = req.params.id;
    const Contact = await contact.findById(id);
    if (!Contact) {
      throw new Error("Contact not found");
    }
    res.json({
      Contact,
    });
  })
);
module.exports = router;

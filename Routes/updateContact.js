const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const contact = require("../models/contact");
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    id = req.params.id;
    const Contact = await contact.findById(id);
    const updatedContact = await contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ updatedContact });
  })
);
module.exports = router;

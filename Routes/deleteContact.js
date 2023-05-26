const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const contact = require("../models/contact");
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    id = req.params.id;
    const Contact = await contact.findById(id);
    await Contact.deleteOne();

    res.json({
      message: `deleteContact for ${id}`,
    });
  })
);
module.exports = router;

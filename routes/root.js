const express = require("express");
const rootController = require("../controllers/root");
const router = express.Router();

router.get("/", rootController.getRoot);

//!!THIS HAS TO BE THE VERY LAST LINE OF THE FILE!!
module.exports = router;

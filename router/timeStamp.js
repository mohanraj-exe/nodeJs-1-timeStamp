const express = require("express");
const router = express.Router();
const timeStampModule = require("../module/timeStamp");

router.get('/get', timeStampModule.getTimeStamp);
router.get('/getFiles', timeStampModule.getTextFiles);

module.exports = router;
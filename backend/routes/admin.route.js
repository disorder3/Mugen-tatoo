const express = require("express");
const { addImages } = require('../controllers/admin.controller')
const multer = require("multer");

const upload = multer(); // initialise multer
const router = express.Router();



router.post("/addImages", upload.array('images', 5), addImages);



module.exports = router
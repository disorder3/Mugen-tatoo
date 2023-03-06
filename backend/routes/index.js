const express = require("express");
const { adminAuth } = require("../middlewares/admin");
const Images = require('../models/images.model')

const router = express.Router();


const getImages = async (req, res) => {
    try {
        const images = await Images.find({})
        res.status(200).json(images)
    } catch (error) {
        res.sendStatus(500)
    }
}
router.get('/images', getImages)


router.delete('/images/:_id', adminAuth, async (req, res, next) => {
    const { _id } = req.params
    try {
        await Images.findByIdAndDelete(_id)
        next()
    } catch (error) {
        res.sendStatus(500)
    }

}, getImages)


module.exports = router
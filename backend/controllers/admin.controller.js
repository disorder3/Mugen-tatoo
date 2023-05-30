const Images = require('../models/images.model')
const cloudinary = require("../middlewares/cloudinary"); 

exports.addImages = async (req, res) => {
    try {
        const images = await Promise.all(req.files.map(async file => {
            return new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({
                        resource_type: "auto",
                        folder: process.env.FOLDER_NAME,
                        public_id: `${Date.now()}_${file.originalname}`,
                    }, (error, result) => {
                        if (error) return reject();
                        return resolve({
                            url: result.secure_url,
                            public_id: result.public_id

                        });
                    })
                    .end(file.buffer);
            });
        }));

        await Images.create(images)

        const allImages = await Images.find({})
        res.status(200).json(allImages)
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }
}
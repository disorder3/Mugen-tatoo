const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({ //modèle type pour la gestion des images
    url: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Image", imageSchema);

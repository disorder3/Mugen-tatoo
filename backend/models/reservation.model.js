const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({ //modèle type pour le formulaire de réservation 
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);

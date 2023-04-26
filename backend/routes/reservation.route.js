const express = require("express");
const { reservationValidation, catchErrors, imageValidation } = require("../middlewares/validations");
const { reservation } = require("../controllers/reservation.controller");
const multer = require("multer");

const upload = multer(); // initialise multer
const router = express.Router(); // crée un routeur express

router.post(
  "/", // route pour les requêtes POST
  upload.single("image"), // utilise multer pour récupérer le fichier image envoyé
  reservationValidation, // utilise les validation de réservation
  imageValidation, // utilise la validation d'image
  catchErrors, // utilise le middleware pour attraper les erreurs
  reservation // utilise la fonction de réservation
);

module.exports = router; // exporte le routeur

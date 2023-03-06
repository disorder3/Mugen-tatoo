const Revervation = require("../models/reservation.model"); // importe le modèle de réservation
const cloudinary = require("../middlewares/cloudinary"); // importe le middleware cloudinary

exports.reservation = async (req, res) => {
  const { firstname, lastname, birthday, email, message } = req.body; // récupère les informations de réservation à partir du corps de la requête
  const file = req.file; // récupère le fichier image à partir de la requête

  try {
    let imageResult = null;
    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({
          resource_type: "auto", // détermine automatiquement le type de ressource
          folder: process.env.FOLDER_NAME, // utilise le nom de dossier spécifié dans les variables d'environnement
          public_id: `${Date.now()}_${lastname}_${firstname}_${file.originalname}`, // utilise la date actuelle, le nom et le prénom pour donner un identifiant public unique
        }, (error, result) => {
          if (error) return reject(); // s'il y a une erreur, rejette la promesse

          imageResult = result; // sinon, enregistre le résultat de l'upload
          return resolve(); // résout la promesse
        }
        )
        .end(file.buffer); // envoie le fichier image au cloudinary
    });

    const createdReservation = await Revervation.create({
      firstname,
      lastname,
      birthday,
      email,
      message,
      image: {
        url: imageResult.secure_url, // utilise l'url sécurisée de l'image
        public_id: imageResult.public_id, // utilise l'identifiant public de l'image
      },
    });

    res.status(200).send(createdReservation); // renvoie la réservation créée
  } catch (err) {
    console.log(err);
  }
};

const { check, validationResult } = require("express-validator");

const signinValidations = [
  check("email").isEmail().withMessage("E-mail est pas valide"),
  check("password")
    .isLength({ min: 2 })
    .withMessage("Le mot de passe doit contenir au moins 8 caractères"),
];

const signupValidations = [
  ...signinValidations, // étend les vérifications de validation de signinValidations
  check("name")
    .isLength({ min: 2 })
    .withMessage("Le nom doit contenir au moins 2 caractères"),
  check("confirmPassword").custom((value, { req }) => {
    // vérifie que le champ confirmPassword est égal au champ mot de passe
    if (value !== req.body.password) {
      throw new Error("le mot de passe ne correspond pas");
    }
    return true;
  }),
];

const reservationValidation = [
  check("firstname").not().isEmpty().withMessage("Le prénom est requis"),
  check("lastname").not().isEmpty().withMessage("Le nom est requis"),
  check("birthday").not().isEmpty().withMessage("La date de naissance est requise"),
  check("email").isEmail().withMessage("Email invalide"),
  check("message").isLength({ min: 10, max: 280 }).withMessage("Minimum 10 et maximum 280 caractères")
  ];

const imageValidation = (req, res, next) => {
  // vérifie que le champ image est présent et moins de 4mb
  const imageError = [];
  if (!req.file) imageError.push({ param: "image", msg: "L'image est requise" });
  else {
    if (req.file.size / (1024 * 1024) > 4)
      imageError.push({
        param: "image",
        msg: "La taille de l'image doit être inférieure à 4 Mo",
      });
  }

  req.imageError = imageError; // ajoute l'imageError à l'objet de demande
  next();
};

const catchErrors = (req, res, next) => {
  // attrape les erreurs de validation et les renvoie dans la réponse sous forme d'objet JSON
  const errors = validationResult(req);
  if (!errors.isEmpty() || req.imageError?.length) {
    return res.status(400).json({
      errors: [
        ...errors.array().map(({ param, msg }) => ({ param, msg })), // tableau des erreurs de validationResult
        ...(req.imageError || []), // tableau des erreurs de la validation de l'image
      ],
    });
  }

  return next(); // s'il n'y a pas d'erreurs, continuer au prochain middleware
};

module.exports = {
  signinValidations,
  signupValidations,
  reservationValidation,
  imageValidation,
  catchErrors,
};

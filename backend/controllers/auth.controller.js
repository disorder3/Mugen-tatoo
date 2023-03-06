const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    // trouve l'utilisateur correspondant à l'email spécifié
    if (err) return res.status(500).send(err); // s'il y a une erreur, renvoie un statut 500
    if (!user)
      return res
        .status(404)
        .send({ message: "E-mail ou mot de passe incorrect" }); // s'il n'y a pas d'utilisateur correspondant, renvoie un statut 404 avec un message d'erreur

    // Compare mot de passe
    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
      // compare le mot de passe fourni avec celui stocké dans la base de données
      if (err) return res.status(500).send(err); // s'il y a une erreur, renvoie un statut 500
      if (!isMatch)
        return res
          .status(404)
          .send({ message: "E-mail ou mot de passe incorrect" }); // s'il n'y a pas de correspondance, renvoie un statut 404 avec un message d'erreur

      // Creer JWT de l'utilisateur
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
        // crée un jeton contenant l'ID de l'utilisateur
        expiresIn: "1d", // qui expire après 1 jour
      });
      return res.status(200).send({
        // renvoie le jeton et les informations de l'utilisateur
        token,
        user: {
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        },
      });
    });
  });
};

exports.signup = (req, res) => {
  const { name, email, password } = req.body; // récupère les informations de l'utilisateur à partir du corps de la requête
  // Check si l'email existe dans la base de donnée
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).send(err); // s'il y a une erreur, renvoie un statut 500
    }

    // vérifie si l'email existe déjà dans la base de données
    if (user) {
      return res.status(400).send({ message: "l'email est déjà existant" }); // s'il y a un utilisateur correspondant, renvoie un statut 400 avec un message d'erreur
    }

    const newUser = new User({ name, email, password }); // crée un nouvel utilisateur avec les informations spécifiées

    // crypte le mot de passe et sauvegarde les donnees dans la base de donnee
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).send(err); // s'il y a une erreur, renvoie un statut 500
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) return res.status(500).send(err);

        newUser.password = hash; // remplace le mot de passe en clair par le hash

        newUser.save((err, savedUser) => {
          // sauvegarde l'utilisateur dans la base de données
          if (err) return res.status(500).send(err);

          // Creer et retourne un token jwt
          const token = jwt.sign({ id: savedUser._id, isAdmin: savedUser.isAdmin },
            process.env.JWT_SECRET,
            {
              expiresIn: "1d", // qui expire après 1 jour
            }
          );
          res.status(200).send({
            // renvoie le jeton et les informations de l'utilisateur
            token,
            user: {
              name: savedUser.name,
              email: savedUser.email,
              isAdmin: savedUser.isAdmin
            },
          });
        });
      });
    });
  });
};

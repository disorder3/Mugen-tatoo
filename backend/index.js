require("dotenv").config(); // importe les variables d'environnement à partir d'un fichier .env

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { adminAuth } = require("./middlewares/admin");


const app = express();

app.use(express.json()); // utilise express.json pour gérer les données JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // utilise express.urlencoded pour gérer les données d'url encodées dans les requêtes
app.use(cors()); // utilise cors pour gérer les demandes cross-origin

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB")) // si la connexion est établie, affiche un message de succès
  .catch((err) => console.log(err)); // sinon, affiche l'erreur

app.use('/', require('./routes/index'))
app.use("/auth", require("./routes/auth.route"));
app.use("/reservation", require("./routes/reservation.route"));

//admin
app.use("/admin", adminAuth, require("./routes/admin.route"));

const PORT = process.env.PORT || 4001; // utilise la variable d'environnement pour définir le port, ou utilise 4000 par défaut
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
); // écoute les requêtes sur le port spécifié

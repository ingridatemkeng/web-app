const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Définir le moteur de template comme EJS
app.set('view engine', 'ejs');

// Définir le répertoire des vues
app.set('views', path.join(__dirname, 'views'));

// Servir les fichiers statiques du répertoire public
app.use(express.static(path.join(__dirname, 'public')));

// Importer les routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

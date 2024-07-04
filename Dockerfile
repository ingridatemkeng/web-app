# Utiliser l'image de base Node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 4000

# Démarrer l'application
CMD ["node", "app.js"]

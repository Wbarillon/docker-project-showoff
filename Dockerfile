# Récupère la dernière version de nodejs pour l'image docker.
FROM node:latest

# Définition du répertoire de travail dans lequel nos fichiers seront présents
WORKDIR /api

# COPY demande la source et la destination, il transfert les fichiers locaux vers le container docker
COPY . .

# Puisque on a défini le port dans une variable d'environnement, il faut l'informer
ENV PORT=5000
ENV MONGO_URL=mongodb+srv://Wbarillon:iSlande80.@cluster0-z7umv.mongodb.net/test?retryWrites=true&w=majority

# Installation des package du service et lancement du serveur
CMD npm install && node server.js

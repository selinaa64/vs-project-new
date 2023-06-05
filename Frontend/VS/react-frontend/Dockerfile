# Dockerfile für das React-Frontend

# Verwenden Sie ein Node.js-Base-Image
FROM node:14-alpine

# Arbeitsverzeichnis im Container erstellen
WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# Projektdateien kopieren
COPY . .

# Build-Prozess durchführen
RUN npm run build

# Port definieren
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]

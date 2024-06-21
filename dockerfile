# Utiliza una imagen base de Node
FROM node:alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm ci

# Copia los archivos del proyecto al contenedor
COPY . ./

# Expone el puerto que usará el servidor HTTP
EXPOSE 5173

# Ejecuta el servidor HTTP para servir la aplicación React construida
CMD ["npm", "run", "dev", "--", "--host"]

# # Use an official Node.js runtime as a parent image from dockerhub
# FROM node:20-alpine
# # Set the working directory in the container
# WORKDIR /app
# # Copy package.json and package-lock.json with * 
# # to the working directory
# COPY package*.json ./
# # Install dependencies on container
# RUN npm install
# # copy the rest code to the working directory
# COPY . .
# # Expose the port to run the app
# EXPOSE 5000
# # CMD to Run the BACKEND
# CMD ["node", "server.js"]
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

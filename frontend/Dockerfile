# # Build stage where the application is build
# FROM node:20-alpine AS build
# # setting working directory
# WORKDIR /app
# #copying the package files and installing the dependencies
# COPY package*.json ./
# RUN npm install
# # copying all remainung files to working directory
# COPY . .
# # bulding the application
# RUN npm run build
# # Runtime stage - just expose the built files
# FROM node:20-alpine
# # setting working directory
# WORKDIR /app
# # copying required files from build stage
# COPY --from=build /app/dist ./dist
# # runing port 3000
# EXPOSE 3000
# # this will run the preview server to serve the built files
# CMD ["npm", "run", "preview"]
# FROM node:20-alpine AS build

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM node:20-alpine
# WORKDIR /app

# COPY --from=build /app/dist ./dist

# EXPOSE 3000

# CMD ["npm", "run", "preview"]
# Build stage
# FROM node:20-alpine AS build
# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Runtime stage: Only export build files (no vite, no nginx)
# FROM alpine:3.18
# WORKDIR /app

# # Copy built frontend
# COPY --from=build /app/dist ./dist

# # No server here. Only static files.
# CMD ["sh", "-c", "while true; do sleep 3600; done"]
# Use Node.js 20 alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run Vite in host accessible mode
CMD ["npm", "run", "dev", "--", "--host"]

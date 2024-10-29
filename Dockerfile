# Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Set the working directory in the container
#WORKDIR /app

# Copy package.json and package-lock.json
#COPY package*.json ./

# Install the dependencies
#RUN npm install

# Copy the rest of the application code
#COPY . .

# Build the app for production
#RUN npm run build

# Start a new stage to serve the app
#FROM nginx:alpine

# Copy the build folder from the previous stage to the nginx html folder
#COPY --from=build /app/build /usr/share/nginx/html

# Expose the port on which the app runs
#EXPOSE 80

# Start Nginx server
#CMD ["nginx", "-g", "daemon off;"]


# Stage 1: Build the React app
#FROM node:16 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

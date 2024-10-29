# Stage 1: Build the app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./ 
COPY package-lock.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy built assets from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx will run on
EXPOSE 80

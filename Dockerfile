# Stage 1: Build the application
FROM node:14 as build

# Set up app directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/

# Install dependencies
RUN npm install

# Copy the app to the image
COPY . /app

# Build the app
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.17.8-alpine

# Copy the build output to replace the default Nginx contents
COPY --from=build /app/build /usr/share/nginx/html

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80
EXPOSE 443

# Start the server
CMD ["nginx", "-g", "daemon off;"]

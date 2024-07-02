# Use the official Node.js 18 image as the base image
FROM node:18

# Create and change to the app directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (change the port number if needed)
EXPOSE 3000

# Copy the .env file
COPY .env .env

# Command to run your application
CMD ["npm", "run", "dev"]

#first make image with command docker build -t your-image-name .
#for running this using docker you have to run the command docker run -p 3000:3000 --env AUTH_SECRET= --env AUTH_GITHUB_ID= --env AUTH_GITHUB_SECRET= your-app-name


# Use the official Node.js image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the backend server
RUN npm run build

# Expose the port
EXPOSE $PORT

# Command to run the app
CMD ["npm", "start"]

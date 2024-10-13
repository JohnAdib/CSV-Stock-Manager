# Use the official Node.js Alpine image as the base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/local/src/app

# Copy only package.json and package-lock.json to leverage Docker's caching mechanism
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "dev"]

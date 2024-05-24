# Use the official Node.js runtime as a base image
FROM node

# Set the working directory in the container to your app's location
WORKDIR ./index.js

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your app's source code to the working directory
COPY . .

# Expose port 3000 for the app to be accessible
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]
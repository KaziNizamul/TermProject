# Use the official Node.js base image
FROM node:latest

# Install required packages
RUN apt-get update && \
  apt-get install -y \
  curl \
  git \
  openssh-client \
  bash \
  tar \
  wget

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]
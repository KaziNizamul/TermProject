# Use Amazon Linux as the base image
FROM amazonlinux:2

# Install required packages
RUN yum update -y \
  curl \
  git \
  openssh \
  bash \
  tar \
  wget \
  nodejs \
  npm

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
CMD [ "npm", "start" ]

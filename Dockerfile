# Use Amazon Linux as the base image
FROM amazonlinux:2

# Install Node.js and NPM
RUN amazon-linux-extras install -y nodejs18
RUN yum install -y npm

# Install required packages
RUN yum update -y && \
  yum install -y \
  curl \
  git \
  openssh \
  bash \
  tar \
  wget

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm ci

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 5173

# Command to run the application
CMD ["npm", "start"]
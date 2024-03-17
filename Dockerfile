# Start from Node.js version 16
FROM node:16

# Install required packages
RUN apt-get update && apt-get install -y \
  curl \
  git \
  openssh-client \
  bash \
  tar \
  wget

# Set working directory
RUN mkdir -p /usr/src/kazi_pvt_dir

WORKDIR /usr/src/kazi_pvt_dir

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

RUN echo "✅ ran npm i"

# Copy the rest of the application code
COPY . .

# Expose port 80
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]






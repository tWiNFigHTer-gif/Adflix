# Use official Node.js runtime as the base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Create videos directory if it doesn't exist
RUN mkdir -p videos

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Health check to ensure the container is running properly
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/debug || exit 1

# Start the application
CMD ["npm", "start"]
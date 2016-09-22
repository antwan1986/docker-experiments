FROM node:4.5.0
MAINTAINER Anthony Hastings <ar.hastings@gmail.com>

# Create a directory (to house our source files) and navigate to it.
WORKDIR /src

# Copy over the package.json file to the containers working directory.
COPY ./package.json /src/package.json

# Install our desired node packages.
RUN npm install

# Copy everything in the host folder into the working folder of the container.
COPY ./ /src/

# Expose the specified port back to the host machine.
EXPOSE 8080

# Run the test suite.
CMD ["npm", "start"]
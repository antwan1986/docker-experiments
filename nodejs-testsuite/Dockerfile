FROM node:4.5.0
MAINTAINER Anthony Hastings <ar.hastings@gmail.com>

# Copy over the package.json file to the container.
ADD ./package.json /src/package.json

# Change the working directory to our source folder.
WORKDIR /src

# Install our desired node packages.
RUN npm install

# Copy everything in the host folder into the working folder of the container.
COPY ./ /src/

# Run the test suite.
CMD ["npm", "test"]
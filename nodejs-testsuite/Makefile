CONTAINER_TAG = anthony:nodejs-testsuite
CONTAINER_NAME = anthony-nodejs-testsuite

help:
	@echo "build - Builds a docker image (with tag) based on the Dockerfile."
	@echo "start - Creates a named docker container from the image."
	@echo "run-script - Calls a specific NPM script instead of the Dockerfiles default."
	@echo "stop - Stops and removes the docker container."
	@echo "bash - Runs bash within the container by overriding 'CMD' with bash."
	@echo "show-images - Shows all built docker images."
	@echo "show-containers - Shows all built docker containers."

build:
	docker build --tag ${CONTAINER_TAG} ./

# NOTE:
# This command mounts the local js directory into the container so said
# container is always using the latest source files when it runs. The `pwd`
# command is also used to make things portable for other users.
#
# NOTE:
# The node_modules folder is stored in a data volume, as data volumes copy in
# the data from the built docker image before the `src` directory is mounted.
# This stops the issue where mounting the current, node moduleless folder hides
# the node_modules in the container.
start:
	docker run --tty \
           --interactive \
           --rm \
           --volume `pwd`/js:/src/js \
           --volume `pwd`/test-results:/src/test-results \
           --volume /src/node_modules \
           --name ${CONTAINER_NAME} \
           ${CONTAINER_TAG}

# EXAMPLE:
# make run-script SCRIPT=pretest
run-script:
	docker run --tty \
           --interactive \
           --rm \
           --volume `pwd`/js:/src/js \
           --volume `pwd`/test-results:/src/test-results \
           --volume /src/node_modules \
           --name ${CONTAINER_NAME} \
           ${CONTAINER_TAG} \
           npm run-script $(SCRIPT)

bash:
	docker run --tty --interactive --rm ${CONTAINER_TAG} /bin/bash

show-images:
	docker images;

show-containers:
	docker ps --all;
CONTAINER_TAG = anthony:nodejs-api-detached
CONTAINER_NAME = anthony-nodejs-api-detached

help:
	@echo "build - Builds a docker image (with tag) based on the Dockerfile."
	@echo "create - Creates a named container ready for being started."
	@echo "start - Starts the stopped container in detach mode."
	@echo "stop - Stops the docker container."
	@echo "remove - Deletes the docker container (if it exists)."
	@echo "bash - Runs bash within the container by overriding 'CMD' with bash."
	@echo "show-images - Shows all built docker images."
	@echo "show-containers - Shows all built docker containers."

build:
	docker build --tag ${CONTAINER_TAG} ./

# NOTE:
# This command mounts the current directory into the container so said
# container is always using the latest source files when it runs. The `pwd`
# command is also used to make things portable for other users.
#
# NOTE:
# Exposes the internal port 8080 to 49160 on the host machine.
#
# NOTE:
# The node_modules folder is stored in a data volume, as data volumes copy in
# the data from the built docker image before the `src` directory is mounted.
# This stops the issue where mounting the current, node moduleless folder hides
# the node_modules in the container.
#
# NOTE:
# The container is detached and runs in the background.
create:
	docker run --publish 49160:8080 \
           --volume `pwd`:/src \
           --volume /src/node_modules \
           --detach \
           --name ${CONTAINER_NAME} \
           ${CONTAINER_TAG}

start:
	docker start ${CONTAINER_NAME}

stop:
	docker stop ${CONTAINER_NAME}

remove:
	docker rm ${CONTAINER_NAME}

bash:
	docker run --tty --interactive --rm ${CONTAINER_TAG} /bin/bash

show-images:
	docker images;

show-containers:
	docker ps --all;
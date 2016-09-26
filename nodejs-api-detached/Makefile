CONTAINER_TAG = anthony:nodejs-api-detached
CONTAINER_NAME = anthony-nodejs-api-detached

help:
	@echo "build - Builds and tags a docker image using the Dockerfile."
	@echo "create - Creates and starts a named container in detached mode."
	@echo "start - Starts the stopped container in detach mode."
	@echo "stop - Stops the running named docker container."
	@echo "remove - Removes the named container."
	@echo "bash - Runs bash process within an already running named container."

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
	docker exec --tty --interactive ${CONTAINER_NAME} /bin/bash
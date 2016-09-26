CONTAINER_TAG = anthony:nodejs-api
CONTAINER_NAME = anthony-nodejs-api

help:
	@echo "build - Builds and tags a docker image using the Dockerfile."
	@echo "create - Creates and starts a self-removing, named docker container."
	@echo "stop - Stops the running named docker container."
	@echo "bash - Creates and starts a self-removing container running bash."

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
create:
	docker run --publish 49160:8080 \
           --volume `pwd`:/src \
           --volume /src/node_modules \
           --rm \
           --name ${CONTAINER_NAME} \
           ${CONTAINER_TAG}

stop:
	docker stop ${CONTAINER_NAME}

bash:
	docker run --tty --interactive --rm ${CONTAINER_TAG} /bin/bash
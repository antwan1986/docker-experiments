MONGODB_CONTAINER_TAG = mongo:3.2
MONGODB_CONTAINER_NAME = anthony-nodejs-mongodb-linking-db

EXPRESS_CONTAINER_TAG = anthony:nodejs-mongodb-linking-express
EXPRESS_CONTAINER_NAME = anthony-nodejs-mongodb-linking-express

help:
	@echo "create-db - Creates and starts a named DB container in detached mode."
	@echo "start-db - Starts the stopped DB container in detach mode."
	@echo "stop-db - Stops the running named DB docker container."
	@echo "remove-db - Removes the named DB container."
	@echo "logs-db - Get PID #1 logs for the named DB container."
	@echo "build-express - Builds and tags a docker image using the Dockerfile."
	@echo "create-express - Creates and starts a named Express container in detached mode."
	@echo "start-express - Starts the stopped Express container in detach mode."
	@echo "stop-express - Stops the running named Express container."
	@echo "remove-express - Removes the named Express container."
	@echo "bash-express - Runs bash process within an already running named Express container."
	@echo "debug-express - Creates and starts a self-removing Express container that outputs data."
	@echo "logs-express - Get PID #1 logs for the named Express container."

# NOTE:
# The `mongo:3.2` image automatically exposes port 27017 but we don't do any
# port mapping to the host machine here; that's handled by container linking.
create-db:
	docker run --detach \
           --name ${MONGODB_CONTAINER_NAME} \
           ${MONGODB_CONTAINER_TAG}

start-db:
	docker start ${MONGODB_CONTAINER_NAME}

stop-db:
	docker stop ${MONGODB_CONTAINER_NAME}

remove-db:
	docker rm ${MONGODB_CONTAINER_NAME}

logs-db:
	docker logs ${MONGODB_CONTAINER_NAME}

build-express:
	docker build --tag ${EXPRESS_CONTAINER_TAG} ./

create-express:
	docker run --tty \
           --interactive \
           --detach \
           --publish 49876:8080 \
           --link ${MONGODB_CONTAINER_NAME}:mongodb \
           --volume `pwd`/src:/src \
           --volume /src/node_modules \
           --name ${EXPRESS_CONTAINER_NAME} \
           ${EXPRESS_CONTAINER_TAG}

start-express:
	docker start ${EXPRESS_CONTAINER_NAME}

stop-express:
	docker stop ${EXPRESS_CONTAINER_NAME}

remove-express:
	docker rm ${EXPRESS_CONTAINER_NAME}

bash-express:
	docker exec --tty --interactive ${EXPRESS_CONTAINER_NAME} /bin/bash

debug-express:
	docker run --rm \
           --link ${MONGODB_CONTAINER_NAME}:mongodb \
           --name ${EXPRESS_CONTAINER_NAME} \
           --volume `pwd`/src:/src \
           ${EXPRESS_CONTAINER_TAG} \
           /bin/bash \
           /src/express-debug.sh

logs-express:
	docker logs ${EXPRESS_CONTAINER_NAME}
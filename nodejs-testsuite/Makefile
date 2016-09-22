CONTAINER_TAG = anthony:fe-skeleton-test
CONTAINER_NAME = fe-skeleton-test

help:
	@echo "build - Builds a docker image (with tag) based on the Dockerfile."
	@echo "start - Creates a named docker container from the image."
	@echo "stop - Stops and removes the docker container."
	@echo "bash - Runs bash within the container by overriding 'CMD' with bash."
	@echo "show-images - Shows all built docker images."
	@echo "show-containers - Shows all built docker containers."

build:
	docker build --tag ${CONTAINER_TAG} ./

start:
	docker run --tty --interactive --rm --volume `pwd`/js:/src/js --volume `pwd`/test-results:/src/test-results ${CONTAINER_TAG}

bash:
	docker run --tty --interactive --rm ${CONTAINER_TAG} /bin/bash

show-images:
	docker images;

show-containers:
	docker ps --all;
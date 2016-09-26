CONTAINER_TAG = anthony:nodejs-testsuite
CONTAINER_NAME = anthony-nodejs-testsuite

help:
	@echo "build - Builds and tags a docker image using the Dockerfile."
	@echo "create - Creates and starts a self-removing, named docker container."
	@echo "run-script - Runs specified NPM script instead of testing command."
	@echo "bash - Creates and starts a self-removing container running bash."

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
create:
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
# Node.js MongoDB Linking

## Introduction

This experiment runs two containers; one is an instance of MongoDB and the other
is a Node.js Express application that has an endpoint which calls out to the
MongoDB instance for data (made possible via container linking). Both containers
are run in a detached state and need manually stopped and removed. It
demonstrates the following:

* Running a detached docker container.
* Using Makefile lifecycle commands to start, stop and remove a container.
* Linking so the Express container can communicate to the MongoDB container.
* Mounting source files directory which contains latest source code.
* Exposing and mapping an internal container port to a host machine port.
* Executing an additional process on the container to allow running bash.

## Usage

The experiment is interacted with entirely through `make` commands. To see a
full list of available commands, run `make help`.

The MongoDB container image doesn't need built as there is no custom image used.
We instead use the official MongoDB image. The Express container does need
built, and can be done so by running the following:

```make build-express```

To start the MongoDB detached container, run the following:

```make create-db```

To start the Express application by spinning up a detached container, run the
following:

```make create-express```

## Results

After starting both docker containers you should be able to access
[http://localhost:49876](http://localhost:49876) and see an Express container
endpoint which is using data from the MongoDB container.

It's worth noting that port mapping isn't used here when running a new
container; the communication between containers is handled via a `link`
parameter.

Using the linking parameter when running the Express container simply extracts
the runtime information of the MongoDB container (its IP address, the exposed
ports) and exposes that information into the Express container as environment
variables and hosts file.
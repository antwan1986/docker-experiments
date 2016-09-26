# Node.js API (Detached)

## Introduction

This experiment runs an Node.js Express application that has an endpoint which
can be hit by the host machine via a web browser. The difference between this
experiment and [nodejs-api](../nodejs-api/) is that it runs the docker container
in a detached state and it won't auto-remove once shutdown. It demonstrates the
following:

* Running a detached docker container.
* Using Makefile lifecycle commands to start, stop and remove a container.
* Mounting root directory which contains latest source code.
* Exposing and mapping an internal container port to a host machine port.
* Executing an additional process on the container to allow running bash.

## Usage

The experiment is interacted with entirely through `make` commands. To see a
full list of available commands, run `make help`.

To build the docker image for containers to use, run the following:

```make build```

To start the Express application by spinning up a detached container, run the
following:

```make create```

To start a previously stopped (but not yet removed) container, run the
following:

```make start```

To stop a running container, run the following:

```make stop```

To remove a previously stopped container, run the following:

```make remove```

To start a bash process on a currently running container, run the following:

```make bash```

## Results

After starting the docker container you should be able to access
`http://localhost:49160` and see an Express endpoint.
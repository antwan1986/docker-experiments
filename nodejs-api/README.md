# Node.js API

## Introduction

This experiment runs an Node.js Express application that has an endpoint which
can be hit by the host machine via a web browser. It demonstrates the following:

* Running a self-removing docker container.
* Mounting root directory which contains latest source code.
* Exposing and mapping an internal container port to a host machine port.

## Usage

The experiment is interacted with entirely through `make` commands. To see a
full list of available commands, run `make help`.

To build the docker image for containers to use, run the following:

```make build```

To start the Express application by spinning up a container, run the following:

```make create```

To create a new container and have is start into bash, run the following:

```make bash```

## Results

After starting the docker container you should be able to access
`http://localhost:49160` and see an Express endpoint.
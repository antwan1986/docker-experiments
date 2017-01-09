# Node.js / MongoDB (Linking)

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

It's worth noting that port mapping is used for the Express container so the
host machine can access API endpoints, but port mapping isn't used to allow
communication between containers; instead, this is achieved by using a `link`
parameter.

Using the `link` parameter when running the Express container simply extracts
the runtime information of the MongoDB container (its IP address, the exposed
ports) and exposes that information into the Express container as environment
variables and hosts file.

## Endpoints

To make interacting with the API easier, it's recommended to use a tool such
as [Postman](http://bit.ly/1HCOCwF) to make the calls; it makes setting headers
and request bodies much easier to deal with.

You can ensure that the API server is working and responding to requests by
hitting the root of the server, which should return some JSON:

```
GET / HTTP/1.1
Host: localhost:49876
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
```

Once the server has been confirmed as working, you can also add an entry to the
database as demonstrated below:

```
POST / HTTP/1.1
Host: localhost:49876
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded

name=Billy+Weaver&message=This+is+a+test+message.
```

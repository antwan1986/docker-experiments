# Node.js / MongoDB (Composed)

## Introduction

This experiment is almost a mirror of
[nodejs-mongodb-linking](../nodejs-mongodb-linking/) except that it has been
updated to use `docker-compose` which is very useful when working with multiple
containers.

`docker-compose` reads the `docker-compose.yml` manifest file and starts both
containers as they are described, taking care of port publishing, volumes and
linking. One thing to note is that links via `docker-compose` don't create
environment variables and host file references like `docker run --link` would.
Instead we get containers having hostnames that match their alias, so in this
case `db` is the hostname of our MongoDB container. Using this, we can construct
our own environment variable and pass it to the Express container.

This experiment demonstrates the following:

* Building images and managing lifecycle through `docker-compose up`.
* Mirroring previous experiments settings and options via `docker-compose.yml`.
* Setting environment variables to be used within a container.

## Usage

The experiment is interacted with via
[docker-compose commands](https://docs.docker.com/compose/reference/). To start
both containers and see their output in terminal, run the following:

```docker-compose up```

To stop both containers simply `Ctrl + C` out of it like you would any other
terminal process.

## Results

After starting both docker containers via `docker-compose` commands, you should
be able to access [http://localhost:49876](http://localhost:49876) and see an
Express container endpoint which is using data from the MongoDB container.
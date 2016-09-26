# Docker Experiments

## Introduction

This repository is an experiment in an attempt to learn more about Docker and
the various functionality it brings. The repository has sub-folders of small
experimentations that showcase or utilize a particular docker feature.

## Prerequisites

Ensure that [Docker](https://docs.docker.com/engine/installation/) is installed
on your host machine before attempting to run any of the experiments.

## Contents

* [Node.js API](./nodejs-api/) - Showcases the mapping of an internal container
port to a port on the host machine. This allows a channel of communication to
the container.

* [Node.js API (Detached)](./nodejs-api-detached/) - Virtually identical to the
above code experiment except that this one also showcases how containers can be
run in a detached mode.

* [Node.js Test Suite](./nodejs-testsuite/) - Showcases mounting volumes which
allows files written inside the docker container to be persisted back to the
host machine. It also ensures that source files read by the container are 'live'
and are fully up to date with any changes made after the container was started.

* [Node.js / MongoDB (Linking)](./nodejs-mongodb-linking/) - Showcases container
linking between an Express application container and a MongoDB container.
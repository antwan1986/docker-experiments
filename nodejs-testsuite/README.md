# Node.js Test Suite

## Introduction

The repository runs the front-end skeleton test suite within a docker container
and demonstrates the following:

* Mount source files directory for always up to date runnings of tests.
* Mount a results directory for writing test suite artifacts back to host.
* Exits the docker process and returns the appropriate exit code on the host.

## Usage

Ensure that [Docker](https://docs.docker.com/engine/installation/) is installed
on your host machine. The experiment is interacted with entirely through `make`
commands. To see a full list of available commands, run `make help`.

To build the docker image for containers to use, run the following:

```make build```

To start up a docker container using the image above, run the following:

```make start```

## Results

After running the instructions above you should have a multitude of test output
files inside of `./test-results/` containing up to date information on the last
running of the test suite. The exit code of the process (`echo $?`) should also
accurately reflect if the test suite passed or not (`0` for pass, any other
number for fail).

Try changing test specifications between passes and fails, then re-run the
docker container to see the exit codes change.
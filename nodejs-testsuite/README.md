# Node.js Test Suite

## Introduction

This experiment runs a
[test suite](https://github.com/rehabstudio/fe-skeleton-testsuite) within a
docker container and is a demonstration of the following:

* Running a self-removing docker container.
* Mounting source files directory thus ensuring tests run against latest code.
* Persisting test results created inside the docker container onto the host.

## Usage

The experiment is interacted with entirely through `make` commands. To see a
full list of available commands, run `make help`.

To build the docker image for containers to use, run the following:

```make build```

To start the test suite by spinning up a container, run the following:

```make create```

You can run other npm scripts via a container by specifying them with the
`run-script` command:

```make run-script SCRIPT=pretest```

## Results

After running the instructions above you should have a multitude of test output
files inside of `./test-results/` containing up to date information on the last
running of the test suite. The exit code of the process (`echo $?`) should also
accurately reflect if the test suite passed or not (`0` for pass, any other
number for fail).

Try changing test specifications between passes and fails, then re-run the
docker container to see the exit codes change.
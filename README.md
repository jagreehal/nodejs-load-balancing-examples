# Nodejs Load Balancing Examples

This repository contains examples of how load balancing node.js.

## Prerequisites

You'll need Node and Docker, to run via docker-compose and Kubernetes if you want to run the k8 example.

## Getting Started

Install dependencies using npm, yarm or pnpm then run the application.

```bash
npm build
```

Start pm2 and ngnix using

```bash
docker-compose up
```

## Health check API Endpoints

Both pm2 and ngnix have health check endpoints. These return an `id` of the server instance.

You should see the `id` change when call the same endpoint for each instance that is load balanced.

### [http://localhost:5000/](http://localhost:5000/)

Is the pm2 `healthcheck` endpoint.

### [http://localhost:8080/](http://localhost:8080/)

Is the ngnix `healthcheck` endpoint.

## Server Crash API Endpoints

Using the URLs below you can force a server to crash by loading a file that doesn't exist.

### [http://localhost:5000/boom](http://localhost:5000/boom)

PM2 will restart the server.

### [http://localhost:8080/boom](http://localhost:8080/boom)

Docker-compose will restart the server.

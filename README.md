# Next.js Quickstart

## The idea behind the quickstart

The project builds on top of MUI's [material-ui-nextjs-ts](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts) example.

Adddtional libraries ([ESLint](https://eslint.org/), [husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/okonet/lint-staged) and [pg](https://node-postgres.com/)) have been installed and configured.

Docker compose is configured to run the development environment, which includes Next.js and PostgreSQL.

## Prerequisites

The following software needs to be installed:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Download

Download the example [or clone the repo](https://github.com/KennyLMQ/nextjs-quickstart):

```sh
curl https://codeload.github.com/KennyLMQ/nextjs-quickstart/tar.gz/main | tar -xz
```

## PostgreSQL setup

Duplicate the `.env.sample` file:

```sh
cd nextjs-quickstart/database
cp .env.sample .env.local
```

Update all three variables (`POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`) in the file.

## How to run

Install packages (needs to be run once to setup husky):

```sh
cd nextjs-quickstart
npm i
```

Run docker compose:

```sh
cd nextjs-quickstart
docker compose up
```

Go to http://localhost:3000/ and you should see something similar to this:
![nextjs-quickstart-screenshot](https://user-images.githubusercontent.com/22737987/198955317-9669412a-49dd-4606-8aa4-478b026c3e41.png)

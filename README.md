# ToDo Backend API

ToDo App Backend built with Nest.js, Prisma, and PostgreSQL.

---

## Quick Start

### Prerequisites

> - [Docker](https://www.docker.com/products/docker-desktop)

As long as you have Docker installed then running the app is super easy. Just
clone, configure, and run!

```bash
$ cp .env.example .env
$ npm start
```

`npm start` will immediately boot up the API and database Docker containers and
run them. You can then open a browser and navigate to the API documentation by
going to:

http://localhost:3000/graphql

For more information on the `.env` configuration file continue on to the
[Configuration](#configuration) section below.

---

## Configuration

Before we dive into development let's talk about config for a second.

There is no `.env` file by default when you first clone the repository because
individual developers and servers will want to define their own values in there.
This file is required to run the project. Fortunately there is an example file
called `.env.example` located in the project root. This file is kept up to date.
Read the comments in that file and follow any instructions there.


### DATABASE_URL

You can put anything here and it will use this value when creating
and connecting to the database. The defaults from the example work 
just fine, but they are there in case you want to have your own 
credentials or you need to change the default port.

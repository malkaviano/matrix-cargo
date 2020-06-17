[![CodeFactor](https://www.codefactor.io/repository/github/malkaviano/matrix-cargo/badge)](https://www.codefactor.io/repository/github/malkaviano/matrix-cargo)

## Description

Programming test

API to get Github repos by language

Only one endpoint: /github/:lang?page=number

Swagger /api

Due to github limitation, only 1000 results can be acquired by search.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

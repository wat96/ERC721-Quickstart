# ERC721-Quickstart
Quick start template for ERC721

### Getting started

#### Requirements

You will need [nvm](https://github.com/nvm-sh/nvm) and yarn installed. 

If you don't have them installed, this setup usually works

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
$ npm i -g yarn
```

#### Setup
Clone repo and change directory into it. Run:

```shell
$ yarn setup
```

This only needs to be run once, then populate .env file with details.

#### Compiling and deploying

```shell
$ yarn compile
$ yarn deploy-local
```


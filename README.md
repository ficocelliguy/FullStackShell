# Full Stack Shell


## Getting Started

To start, [install Docker](https://docs.docker.com/engine/install/) to support the database container.


Next, make sure you have NVM installed to manage your current version of Node and NPM.

Unix terminal:
```
brew install nvm
```
For Windows use [this guide to set up nvm-windows.](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)


Once NVM is installed, navigate to the project's root directory in the terminal (or Git Bash) and run:
```
nvm install
nvm use 16
```

Now install all of the project's dependencies via NPM:
```
npm ci
```

Make sure Docker is running, then start the database with
```
npm run start-db
```

Populate the database's schema after the first time it is started with
```
prisma-update-db
```

To start the server run
```
npm run start-backend
```

You can test the server locally by navigating to [https://studio.apollographql.com/sandbox/explorer](https://studio.apollographql.com/sandbox/explorer) 


To start the client run
```
npm run start-frontend
```
You can visit the client locally at [http://127.0.0.1:5173/](http://127.0.0.1:5173/)




Tools used in this stack:
- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [GraphQL](https://www.apollographql.com/tutorials/lift-off-part1)
- [Prisma](https://www.prisma.io/docs)

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

### Installation

Repository requires [Knexjs](https://knexjs.org/) global to run.
Repository is using [objection.js](http://vincit.github.io/objection.js). 
Repository is using [routing-controllers](https://github.com/typestack/routing-controllers). 
Advise you to use [TypeScript Toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter) if you use vscode for generate Getters / Setters. 

Install the dependencies and devDependencies and start the server.

```sh
$ npm install knex -g
$ knex migrate:latest
$ npm start
```

For production environments...

```sh
$ touch .env
```

### Default routes
| URL | REQUEST |
| ------ | ------ |
| /login | {email: "yourmail@gmail.com", senha: "youpass"} |
| /register |  {email: "yourmail@gmail.com", senha: "youpass"}|
#### Building for source
For production release:
```sh
$ npm run build
```
Move environment variables:
```sh
$ mv .env /dist
```

import "reflect-metadata"; // this shim is required
import {useExpressServer} from "routing-controllers";
import {json, urlencoded} from "body-parser";
import * as cors from "cors";

import {LoginController} from './controllers/login.controller';
import {RegisterController} from "./controllers/register.controller"
const port = process.env.PORT || 3000

let express = require("express");
const app = express();

app.use(json());
app.use(cors())
app.use(urlencoded({extended: true}))
useExpressServer(app, {
  routePrefix: "/api",
  validation: true,
  controllers: [
    LoginController,
    RegisterController
  ]
})
app.listen(port)

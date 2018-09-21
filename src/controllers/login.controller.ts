import { Request, Response } from "express";
import { Controller, Req, Res, Get, UseBefore, Post, Body, Params } from "routing-controllers";
import { Middleware } from "../middlewares/middleware";
import { UserModel } from "../models/user.model";
import { Token } from "../modules/token";

@Controller("/login")
@UseBefore(Middleware)
export class LoginController {
    token = new Token();

    @Post()
    async login(@Body() params: any, @Res() response: Response){
        try {
            var user = new UserModel();
            user.$email_usuario = params.email;
            user.$senha_usuario = params.password;
            var query = await UserModel.query().where(user).first();
            var hash = this.token.encrypt({email: query.$email_usuario, password: query.$senha_usuario});
            return response.json({token: hash});
        }catch (err){
            return response.send(err);
        }
    }
}


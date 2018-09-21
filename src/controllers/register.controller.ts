import { Request, Response } from "express";
import { Controller, Req, Res, Get, UseBefore, Post, Body, Params } from "routing-controllers";
import { Middleware } from "../middlewares/middleware";
import { UserModel } from "../models/user.model";
import { Token } from "../modules/token";
@Controller("/register")
export class RegisterController {
    token = new Token();

    @Post()
    async login(@Body() body: any, @Res() response: Response){
        try {
            const email_verify = await UserModel.query().where({email_usuario: body.email});
            if(!email_verify.length){
                // import model database user
                var user = new UserModel();
                user.$nome_usuario = body.name;
                user.$email_usuario = body.email;
                user.$senha_usuario = body.password;
                user.$fone_usuario = body.phone;
                var query = await UserModel.query().insert(user).returning('*');
                var hash = this.token.encrypt({email: query.$email_usuario, password: query.$senha_usuario});
                return response.json({token: hash});
            }else{
                return response.status(200).send("email ja esixte");
            }
        }catch (err){
            return response.send(err);
        }
    }
}


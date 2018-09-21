import {ExpressMiddlewareInterface} from "routing-controllers";

export class Middleware implements ExpressMiddlewareInterface {
    use(request: any, response: any, next?: (err?: any) => any): any {
        console.log("do something...");
        next();
    }
}
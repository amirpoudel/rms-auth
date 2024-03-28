import { ErrorHandler } from "./errorHandler";
import { Request,Response } from "express";

export class AsyncHandler {
    public static trycatch(requestHandler: Function){
        return async (req:Request, res:Response, next:Function) => {
            try {
                await Promise.resolve(requestHandler(req, res, next));
            } catch (error) {
                ErrorHandler.expressErrorHandler(error, req, res);
            }
        }
    }
}


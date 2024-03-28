import { IAuthInteractor } from "../interfaces/IAuth";
import { AsyncHandler } from "../utils/error/asyncHandler";
import { NextFunction, Request, Response } from "express";

export class AuthController {
    private interactor:IAuthInteractor;

    constructor(interactor:IAuthInteractor){
        this.interactor = interactor;
    }

    generateToken = AsyncHandler.trycatch(async (req:any, res:any,next:NextFunction) => {
        
        let token = await this.interactor.generateToken(req.body?.payload);

        return res.status(200).json({token});
        
    })

    verifyToken = AsyncHandler.trycatch(async (req:any,res:any,next:NextFunction)=>{
        let token = req.header('Authorization')?.replace("Bearer","").trim();
        if(!token){
            throw new Error("No Token Present in headers");
        }

        let response = await this.interactor.verifyToken(token);
        return res.status(200).json({response})
    })
    
}
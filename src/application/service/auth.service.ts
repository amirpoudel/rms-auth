
import { IAuthService } from "../../interfaces/IAuth";
import jwt from "jsonwebtoken";


export class AuthService implements IAuthService{

    private jwtTokenSecrect:string;
    private jwtTokenExpiresIn:string
    constructor(){
        if(!process.env.JWT_TOKEN_SECRECT || !process.env.JWT_TOKEN_EXPIRES_IN ){
            throw new Error('JWT_TOKEN_SECRET Or JWT_TOKEN_EXPIRES_IN environment variable is not defined');
        }
        this.jwtTokenSecrect = process.env.JWT_TOKEN_SECRECT;
        this.jwtTokenExpiresIn = process.env.JWT_TOKEN_EXPIRES_IN;
    }

    generateToken(payload: any): string {
        return jwt.sign(
            {
            ...payload
            },
            this.jwtTokenSecrect,
            {
                expiresIn:this.jwtTokenExpiresIn
            }
            
        );
    }

    verifyToken(token: string): any {
        try {
            if(!token){
                throw new Error("Token must need")
            }

            const decode = jwt.verify(token,this.jwtTokenSecrect);

            return decode;
        } catch (error) {
            // Handle error here
        }
    }

}
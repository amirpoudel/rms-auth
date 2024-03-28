import { IAuthInteractor, IAuthService } from "../interfaces/IAuth";

export class AuthInteractor implements IAuthInteractor{

    private service : IAuthService;

    constructor(service:IAuthService){
        this.service = service
    }

    async generateToken(payload: any): Promise<string> {
        try {
            const token = await this.service.generateToken(payload);
            return token
        } catch (error) {
            throw new Error("Error while Generating Token");
        }
    }
    async verifyToken(token: string): Promise<any> {
        try {
            const response = await this.service.verifyToken(token);
            return response;
        } catch (error) {
            throw new Error("ERRRRRRRRRRRRRRRRRRRRRRR")
        }
    }
}
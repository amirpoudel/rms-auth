export interface IAuthService {

    generateToken(payload:any):string;
    verifyToken(token:string):Promise<string>;

}


export interface IAuthInteractor {
    generateToken(payload:any):Promise<string>;
    verifyToken(token:string):any;
}
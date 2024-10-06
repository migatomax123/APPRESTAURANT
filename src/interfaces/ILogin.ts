import { IUser } from "./IUser";

export interface ILogin {
    email:    string;
    password: string;
}

export interface IRespLogin {
    msg:    string;
    status: number;
    user:   IUser;
    token:  string;
}
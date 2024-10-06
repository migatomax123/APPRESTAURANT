import { IUser } from "./IUser";

export interface IRegister {
    username: string
    email: string
    password: string
}

export interface IRespRegister {
    msg:         string
    status:      number
    error?:      string
    username?:   IUser
}
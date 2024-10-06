import { ILogin, IRespLogin } from '../interfaces/ILogin';
import { IRegister, IRespRegister } from '@/interfaces/IRegister';
import axios from 'axios';

const apiAuth = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${process.env.API_PREFIX}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login) 
        return data
    },

    register: async (register:IRegister): Promise<IRespRegister> => {
        const ruta = `${process.env.API_PREFIX}/auth/register`;
        const {data} = await axios.post(`${ruta}`, register) 
        return data
    }
}

export default apiAuth;
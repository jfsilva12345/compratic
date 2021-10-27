import axios from 'axios';
import { constants } from '../util/Constants';
export const cargarUsuarios = (token) => {    

    try {
        return axios({
            method: 'GET',
            url: `${process.env.React_App_API_Url}${constants.listarUsuarios}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw error.status;
    }
} 
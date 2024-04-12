import axios from 'axios';
import { baseUrl } from './BaseURL';

const headers ={ 
    headers: {
        "Accept": 'application/json', 
        "Content-Type": 'application/json', 
        // "x-cg_demo_api_key": "CG-SPg9tekoiAHktUYkrKA4nJpK",
        // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }
    
};

/**
 * liste des endpoints de cartes
 * @param {*} param : contient la liste des objets
 * @returns 
 */
export const getCardService = (param = null) =>{
    return axios.get(`${baseUrl}/cards`, param, headers);
}
export const postCardService = (param = null) =>{
    return axios.post(`${baseUrl}/cards`, param, headers);
}
export const deleteCardService = (param = null) =>{
    return axios.delete(`${baseUrl}/cards/${param}`, param, headers);
}

/**
 * liste des endpoinds des utilisateurs
 */
export const getAllUserService = (param = null) =>{
    return axios.get(`${baseUrl}/user`, param, headers);
}

export const deleteUserService = (param = null) =>{
    return axios.delete(`${baseUrl}/user/${param}`, param, headers);
}
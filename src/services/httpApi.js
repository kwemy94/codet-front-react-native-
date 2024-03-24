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


export const getCardService = (param = null) =>{
    return axios.get(`${baseUrl}/cards`, param, headers);
}
export const postCardService = (param = null) =>{
    return axios.post(`${baseUrl}/cards`, param, headers);
}
export const deleteCardService = (param = null) =>{
    return axios.delete(`${baseUrl}/cards/${param}`, param, headers);
}
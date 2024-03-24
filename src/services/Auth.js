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


export const loginService = (param = null) =>{
    return axios.post(`${baseUrl}/login`, param, headers);
}
export const logOutService = (param = null) =>{
    return axios.post(`${baseUrl}/logout`, param, headers);
}
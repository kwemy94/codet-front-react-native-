import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";

/**
 * Gestion des etat de connexion avec 
 * Context Api
 */
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(true);
    const getToken = async (auth=false) => {
        try { 
            let token = await AsyncStorage.getItem('token');
            console.log("gt");
            console.log(token);
            console.log(isLogin);
            if (token !== null) {
                setIsLogin(auth);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getToken();
    }, [])

    const logout = async () =>{
        await AsyncStorage.clear();
        setIsLogin(false);
    }


    return (
        <AuthContext.Provider value={{ isLogin, logout, setIsLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
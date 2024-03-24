import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { loginService } from '../services/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../tools/Index';
import { toastNotif } from '../services/NotificationToast';

const LoginForm = () => {
    const {setIsLogin} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [loader, setLoader] = useState(false);
    

    const handleSubmit = async () =>{
        if(email != '' && password != ''){
            setLoader(true);
            let credentials = {email, password};
            await loginService(credentials).then(res =>{
                console.log(credentials);
                console.log(res.status);
                if (res.status == 200) {
                    let user = res.data;
                    AsyncStorage.setItem([
                        ['user', JSON.stringify(res.data.user)],
                        ['token', JSON.stringify(res.data.authorization.token)]
                    ]);
                    setIsLogin(true);
                    toastNotif('success', 'Vous êtes connecté !');
                }
            }).catch(err=>{
                console.log(err.response.status);
                console.log(err.response.data);
                console.warn(err);
                if (err.response.status == 401) {
                    setErrors('Email ou mot de passe incorrect');
                }
                setLoader(false);
            })
        }
    }
    return (
        <View style={styles.container}>
        <View style={styles.form}>
        <Text style={styles.label}>Nom d'utilisateur</Text>
            <TextInput
                style={styles.input}
                placeholder='Username'
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Mot de passe</Text>
            <TextInput 
                style={styles.input} 
                placeholder='Password'
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            {
                errors? <Text style={styles.error}>{errors}</Text> : <></>
            }
            {/* desactiver le btn lorsque le loader est actif */}
            <Button 
                title={loader ? "Connexion ..." : "Connecter"}
                disabled={loader}
                onPress={() =>{handleSubmit()}}
                style={styles.btn}
            />
        </View>
    </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",

    },
    form: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    btn: {
        backgroundColor: 'black',
        borderRadius: 10
    },
    error:{
        color: 'red',
        alignContent:'center',
        alignItems: 'center'
    }
})
import { View, Text, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native'
import React from 'react'
import { postCardService } from '../../services/httpApi';
import { useState } from 'react';
import { toastNotif } from '../../services/NotificationToast';

const CreateCard = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false)

    const validationForm = () =>{
        let errors = {};
        if (!title) errors.title = "Intitulé de la carte requise";
        if (!amount) {
            errors.amount = "Prix de la carte requis";
        } else{
            if (amount <= 0) errors.amount = "Le prix de la carte doit être supérieur à 0";
        }
        if (!description) errors.description = "Renseigner la description";

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = async () =>{
        if (validationForm()) {
            /// soumettre le formulaire
            let card = {title, amount, description};
            setLoader(true);

            await postCardService(card).then(res => {
                console.log(res);
                if (res.status != 201) {
                    // toast.error(res.data.message);
                }else {
                    // toast.success(res.data.message);
                    setTitle('');
                    setAmount(0);
                    setDescription('');
                    setErrors({});
                    props.setCards(res.data.cards);
                    props.setCreateCart(false);
                    toastNotif("success", "Cartes enregistrée 👍");
                }
                setLoader(false);
            }).catch(err => {
                console.log("Erreur survenue : " +err);
                // toast.error("Une erreur survenue");
                setLoader(false);
            });
        }
    }
  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.label}>Intitulé de la carte</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            {
                errors.title ? <Text style={styles.errorText}> {errors.title} </Text> : null
            }

            <Text style={styles.label}>Prix</Text>
            <TextInput 
                style={styles.input} 
                value={amount}
                onChangeText={setAmount}
                keyboardType='numeric'
            />
            {
                errors.amount ? <Text style={styles.errorText}> {errors.amount} </Text> : null
            }

            <Text style={styles.label}>Description</Text>
            <TextInput 
                style={[styles.input, styles.inputMultiline]} 
                placeholder='Ex: Carte de développement jeune'
                multiline
                value={description}
                onChangeText={setDescription}
            />
            {
                errors.description ? <Text style={styles.errorText}> {errors.description} </Text> : null
            }
            {/* desactiver le btn lorsque le loader est actif */}
            <Button 
                title={loader ? "Création ..." : "Créer"} 
                disabled={loader}  
                onPress={() =>{handleSubmit()}}
                style={styles.btn}
            />
            {
                loader? <ActivityIndicator size='large' color='0000ff' /> : null
            }
        </View>
    </View>
  )
}

export default CreateCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5",

    },
    form:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset:{
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    label:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: 5
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    inputMultiline:{
        minHeight: 100,
        verticalAlign: 'top'
    },
    image: {
        height:200,
        width: 200,
        alignSelf: "center",
        marginBottom: 50
    },
    errorText:{
        color: "red",
        fontStyle: 'italic',
        marginBottom: 10
    },
    btn:{
        backgroundColor: 'black',
        borderRadius: 10
    }

});
import { View, Text, Pressable, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { deleteCardService } from '../../services/httpApi';
import { toastNotif } from '../../services/NotificationToast';
import Icon from 'react-native-ionicons';

const DeleteCard = (props) => {

    const [loader, setLoader] = useState(false);
    const handleDelete = async () => {
        setLoader(true);
        await deleteCardService(props.id).then(res => {
            if (res.status == 200) {
                props.setCards(res.data.cards)
                toastNotif("success", "Cartes supprimée 👍");
            } else {
                toastNotif("error", res.data.message);
            }
            setLoader(true);

        }).catch(err => {
            console.log(err);
            setLoader(true);
        })
    }
    return (
        <>
            <TouchableOpacity
                style={styles.tOpacity}
                onPress={handleDelete}>
                <Ionicons name='trash' size={20} style={styles.icon} />
                <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold' }}>
                    {loader ? 'Suppression ... ' : 'Supprimer'}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default DeleteCard

const styles = StyleSheet.create({
    contIcon: {
        // textAlign: 'right'
    },
    icon: {
        color: 'white',
    },
    tOpacity:{
        margin: 10,
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 30,
        flexDirection: 'row',
        backgroundColor: '#f08080'
    }
})
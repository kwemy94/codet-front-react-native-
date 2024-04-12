import { View, Text, Pressable, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { deleteUserService } from '../../services/httpApi';
import { toastNotif } from '../../services/NotificationToast';
import Icon from 'react-native-ionicons';

const DeleteUser = (props) => {

    const [loader, setLoader] = useState(false);

    const handleDelete = async () => {
        setLoader(true);
        
        await deleteUserService(props.id).then(res => {
            console.log(res.data, res.status);
            if (res.status == 200) {
                props.setMembers(res.data.users)
                toastNotif("success", "Utilisateur supprimée 👍");
            } else {
                toastNotif("error", res.data.message);
            }
            setLoader(true);

        }).catch(err => {
            console.log(err.response.data.message);
            setLoader(true);
        })
    }
    return (
        <>
            <TouchableOpacity
                style={styles.tOpacity}
                onPress={handleDelete}>
                <Ionicons name='trash' size={20} style={styles.icon} />
                {/* <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold' }}>
                    {loader ? 'Suppression ... ' : 'Supprimer'}
                </Text> */}
            </TouchableOpacity>
        </>
    )
}

export default DeleteUser

const styles = StyleSheet.create({
    contIcon: {
        // textAlign: 'right'
    },
    icon: {
        color: 'red',
    },
    tOpacity:{
        margin: 10,
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        // width: 100,
    }
})
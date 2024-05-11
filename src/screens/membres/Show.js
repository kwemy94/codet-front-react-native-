import { View, Text, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Card from '../Card/Index';


const ShowUser = ({user}, {setUserDetails}) => {

    return (

        <View style={{ flex: 1, alignContent: 'center' }}>
            <Text>Nom : {user?.name}</Text>
            <Text>Téléphone : {user?.phone}</Text>
            <Text>Email : {user?.email}</Text>
            <Text>Ville de résidence : {user?.town_residence}</Text>
            <View>
                {/* <Button title='Fermer' onPress={setUserDetails(false)}/> */}
            </View>
        </View>
    )
}

export default ShowUser

const styles = StyleSheet.create({
    contIcon: {
        // textAlign: 'right'
    },
    icon: {
        color: 'blue',
    },
    tOpacity: {
        margin: 10,
        borderRadius: 5,
        paddingVertical: 1,
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        // width: 100,
    },
    member: {
        elevation: 5,
        backgroundColor: 'pink'
    }
})
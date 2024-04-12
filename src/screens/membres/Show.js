import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Card from '../Card/Index';

const ShowUser = (props) => {
    const navigation = useNavigation();
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState({});
    const [detailUser, setDetailUser] = useState(false);

    const handleDetails = async (user_id) => {
        setUser(!detailUser);
        let users = await AsyncStorage.getItem('all-users');
        users = JSON.parse(users);
        console.log(users);
        let detailUser = users?.find(user => user.id == user_id);
        console.log(detailUser);
    }
    return (
        <>
            {
                !detailUser ?
                    <TouchableOpacity
                        style={styles.tOpacity}
                        onPress={() => handleDetails(props.id)}
                    // onPress={() => {navigation.navigate(Card)}}
                    >
                        <Ionicons name='eye-outline' size={15} style={styles.icon} />
                        {/* <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold' }}>
                    {loader ? 'Détails ... ' : 'Détails'}
                </Text> */}
                    </TouchableOpacity>
                    : <View style={{ flex: 1, alignContent:'center' }}>
                        <Text>Details content</Text>
                    </View>
            }


        </>
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
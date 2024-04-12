import { View, Text, SafeAreaView, FlatList, StyleSheet, Button, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import DataTable, { COL_TYPES } from 'react-native-datatable-component/src/DataTable';
import { getAllUserService } from '../../services/httpApi';
import { Row, Rows, Table } from 'react-native-table-component';
import DeleteUser from './Delete';
import ShowUser from './Show';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';

const avatar = require('./../../../assets/profil.jpg');

const MemberList = ({navigation}) => {
    const [members, setMembers] = useState([
        // {title: "xxx", description: "eskfs"},
        // {title: "uiiu", description: "yty"},
        // {title: "yuy", description: "klji"},
        // {title: "yuddy", description: "kljjjjji"},
        // {title: "yuycjj", description: "klji"},
    ]);
    const [status, setStatus] = useState();
    const getMembers = async () => {
        await getAllUserService().then(res => {
            console.log(res.status);
            if (res.status == 200) {
                let users = res.data.users;
                setMembers(users);
                AsyncStorage.setItem('all-users', JSON.stringify(users));
            }
        }).catch(err => {
            console.log(err.response.status);
            // console.warn(err);
        });
    }

    useEffect(() => {
        getMembers();
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listCard}>
                <FlatList
                    data={members}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listCard}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={styles.viewImg}>
                                        <Image source={avatar} style={styles.img} />
                                    </View>
                                    <View style={styles.userInfo}>
                                        
                                        <Text style={{fontWeight: 'bold'}} >
                                            Nom : 
                                            <Text style={styles.cardDescription}> { item.name}</Text>
                                        </Text>
                                        <Text style={{fontWeight: 'bold'}} >
                                            Tél : 
                                            <Text style={styles.cardDescription}> { item.phone}</Text>
                                        </Text>
                                        <Text style={{fontWeight: 'bold'}}>
                                            Email :
                                            <Text style={styles.cardDescription}>{item.email}</Text>
                                        </Text>
                                        <Text style={{fontWeight: 'bold'}}>
                                            Ville :
                                            <Text style={styles.amount}>{ item.town_residence}</Text>
                                        </Text>
                                    </View>
                                </View>

                                <View style={{ flexDirection: 'row-reverse' }}>
                                    <DeleteUser id={item.id} setMembers={setMembers} />
                                    {/* <ShowUser id={item.id} setMembers={setMembers} /> */}
                                    <TouchableOpacity
                                        style={styles.tOpacity}
                                        onPress={()=>{<ShowUser />}}
                                    >
                                        <Ionicons name='eye-outline' size={15} style={styles.icon}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )

                    }}
                    ListEmptyComponent={
                        <Text style={styles.cardEmpty}>Pas d'utilisateur</Text>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default MemberList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backGroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    container2: {
        backGroundColor: 'red'
    },
    listCard: {
        flex: 1,
        paddingHorizontal: 16,
        // borderWidth: 1,
        padding: 10,
        margin: 4,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 8

    },
    cardTitle: {
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 20,
        color: "blue"
    },
    cardDescription: {
        fontStyle: "italic"
    },
    cardEmpty: {
        textAlign: "center",
        fontStyle: "italic",
        color: "red"

    },
    addBtn: {
        paddingVertical: 5,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backGroundColor: 'red',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        borderRadius: 10

    },
    amount: {
        color: 'red',
        fontWeight: "bold",
    },
    textBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    img:{
        height:50,
        width:50,
        borderRadius:50/2
    },
    viewImg:{
        paddingTop: 20,
        marginRight: 10
    },
    userInfo:{
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

});
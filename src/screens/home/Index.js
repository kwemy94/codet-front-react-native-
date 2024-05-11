import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthContext } from '../../tools/Index';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from 'react';


const HomeScreen = ({navigation, route}) => {
  const {setIsLogin} = useContext(AuthContext);
  
  const [homeData, setHomeData] = useState([
    {id:1, name: "About", description: "texte descriptif de About"},
    {id:2, name: "histoire", description: "texte descriptif de histoire"},
    {id:3, name: "Goals", description: "texte descriptif de nos objectifs"},
  ]);

  // const attrNavigation =  {
  //    "addListener": [Function addListener], 
  //    "canGoBack": [Function canGoBack], 
  //    "dispatch": [Function dispatch], 
  //    "getId": [Function getId], 
  //    "getParent": [Function getParent], 
  //    "getState": [Function anonymous], 
  //    "goBack": [Function anonymous], 
  //    "isFocused": [Function isFocused], 
  //    "jumpTo": [Function anonymous], 
  //    "navigate": [Function anonymous], 
  //    "removeListener": [Function removeListener], 
  //    "reset": [Function anonymous], 
  //    "setOptions": [Function setOptions], 
  //    "setParams": [Function anonymous]
  //  }
  const handleLogout = async () =>{
    await AsyncStorage.clear();
    setIsLogin(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logout}>
        <TouchableOpacity 
          style={styles.opacityLogout}
          onPress={handleLogout}
        >
          <Text style={{ fontWeight:'bold' }}>Quitter</Text>
          <Ionicons name='log-out-outline' size={20} style={{ color: 'blue', fontWeight:'bold' }} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={homeData}
          renderItem={({item}) =>{
            return (
              <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center'

  },
  text: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20
  },
  logout:{
    // backgroundColor: 'pink',
    flexDirection: 'row-reverse',
    marginLeft: 10
  },
  opacityLogout:{
    flexDirection: 'row'
  }
})
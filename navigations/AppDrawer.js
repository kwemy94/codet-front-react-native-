import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../src/screens/dashboard/Index';
import Card from '../src/screens/Card/Index';
import Ionicons from '@expo/vector-icons/Ionicons';
import MemberList from '../src/screens/membres/Index';
import Login from '../src/authentication/Index';
import LogOut from '../src/authentication/LogOut';


const Drawer = createDrawerNavigator();

export const Admin = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ 
        // headerTintColor: 'red',
        drawerStyle: {
          backgroundColor: '#7EC1F7',
          width: 230,
        },
      }}

    >
      <Drawer.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{ 
          title: "My Dashboard",
          drawerIcon: (() =>(<Ionicons name="color-palette-outline" size={15}/>))

         }}
      />
      <Drawer.Screen
        name='Membres'
        component={MemberList}
        options={{ 
          title: "Nos membres",
          drawerIcon: (() =>(<Ionicons name="people-outline" size={15}/>))

         }}
      />
      <Drawer.Screen name='Cartes' component={Card}
      options={{ 
        title: "Cartes",
        drawerIcon: (() =>(<Ionicons name="card-outline" size={15}/>))

       }}
      />
      <Drawer.Screen name='archive' component={Card}
      options={{ 
        title: "Archives",
        drawerIcon: (({color}) =>(<Ionicons name="archive-outline" color={color} size={15}/>))

       }}
      />
      <Drawer.Screen name='deconnexion' component={LogOut}
      options={{ 
        title: "Log-out",
        drawerIcon: (({color}) =>(<Ionicons name="log-out-outline" color={color} size={15}/>))

       }}
      />
      {/* <Ionicons name="card-outline" size={15}/> */}
      
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Admin />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

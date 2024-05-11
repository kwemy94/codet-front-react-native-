import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './../src/screens/home/Index';
import ProfileScreen from './../src/screens/profile/Index';
import SettingsScreen from './../src/screens/settings/Index';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Admin } from './AppDrawer';
import Toast from 'react-native-toast-message';
import Login from './../src/authentication/Index';
import { AuthContext } from '../src/tools/Index';
import { useContext } from 'react';
import Presentation from '../src/screens/home/Presentation';

const Tab = createBottomTabNavigator();
export default function TabNav() {

    const { isLogin } = useContext(AuthContext)

    // {
    //     "addListener": [Function addListener], 
    //     "canGoBack": [Function canGoBack], 
    //     "dispatch": [Function dispatch], 
    //     "getId": [Function getId], 
    //     "getParent": [Function getParent], 
    //     "getState": [Function anonymous], 
    //     "goBack": [Function anonymous], 
    //     "isFocused": [Function isFocused], 
    //     "navigate": [Function anonymous], 
    //     "pop": [Function anonymous], 
    //     "popToTop": [Function anonymous], 
    //     "push": [Function anonymous], 
    //     "removeListener": [Function removeListener], 
    //     "replace": [Function anonymous], 
    //     "reset": [Function anonymous], 
    //     "setOptions": [Function setOptions], 
    //     "setParams": [Function anonymous]
    // }
    return (

        <>
            {
                !isLogin ?
                    (
                        <>
                            {/* <Presentation /> */}
                            <Login />
                        </>
                    ) :
                    (
                        <>
                            <Tab.Navigator
                                screenOptions={{
                                    tabBarShowLabel: false, //enlever le texte qui est sous l'icone
                                    tabBarActiveTintColor: 'blue',

                                }}>
                                <Tab.Screen
                                    name='Home'
                                    component={HomeScreen}
                                    options={{
                                        tabBarIcon: ({ color }) => (<Ionicons name='home-outline' size={20} color={color} />)
                                    }}
                                />

                                <Tab.Screen
                                    name='Profile'
                                    component={ProfileScreen}
                                    options={{
                                        // tabBarLabel: 'Mon profile',
                                        tabBarIcon: ({ color }) => (<Ionicons name='person-outline' size={20} color={color} />),
                                        tabBarBadge: 3
                                    }}
                                />
                                <Tab.Screen
                                    name='admin'
                                    component={Admin}
                                    options={{
                                        tabBarIcon: ({ color }) => (<Ionicons name='eye-outline' size={20} color={color} />),
                                    }}
                                />
                                <Tab.Screen
                                    name='Settings'
                                    component={SettingsScreen}
                                    options={{
                                        tabBarIcon: ({ color }) => <Ionicons name='settings-outline' size={20} color={color} />,
                                    }}
                                />
                            </Tab.Navigator>
                            <Toast />
                        </>
                    )
            }
        </>

    )
}


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../src/screens/home/Index';
import ProfileScreen from '../src/screens/profile/Index';
import SettingsScreen from '../src/screens/settings/Index';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Admin } from './AppDrawer';
import Toast from 'react-native-toast-message';
import Login from '../src/authentication/Index';
import Presentation from '../src/screens/home/Presentation';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();
export default function StackNav() {

    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen
                    name="Presentation" 
                    options={{ 
                        title:"C.O.D.E.T 1" 
                    }}
                    component={Presentation} 
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Application" options={{ title:'' }} component={TabNav} />
                {/* <Stack.Screen name="Dashboard" component={Admin} /> */}
            </Stack.Navigator>
        </NavigationContainer>

    )
}


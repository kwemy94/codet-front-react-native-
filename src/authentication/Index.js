import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import LoginForm from './LoginForm'


const Tab = createBottomTabNavigator();

const Login = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
    
    </>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backGroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../tools/Index'


const LogOut = () => {
    const {logout} = useContext(AuthContext);
    // setIsLogin(false);
  return (
    <View>
      <Text>LogOut</Text>
    </View>
  )
}

export default LogOut

const styles = StyleSheet.create({})
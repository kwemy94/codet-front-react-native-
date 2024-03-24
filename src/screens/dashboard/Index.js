import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard 12</Text>
      <Icon name="folder" color="green" size={20} />
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20
    }
})
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Paramétre CODET I</Text>
    </View>
  )
}

export default SettingsScreen

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
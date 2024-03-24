import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useContext } from 'react'
import Toast from 'react-native-toast-message'
// import { toastNotif } from '../../src/services/NotificationToast'

const ProfileScreen = () => {
  // const {isLogin} = useContext(AuthContext)
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Utilisateur 👨‍⚖️</Text>
        {/* <Text style={styles.text}>{isLogin}</Text> */}
        <TextInput style={styles.input} />
        <Button
          title='Show toast'
          // onPress={()=>toastNotif()}
        />
        {/* <Toast/> */}
      </View>
    </>
  )
}

export default ProfileScreen

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
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  }
})
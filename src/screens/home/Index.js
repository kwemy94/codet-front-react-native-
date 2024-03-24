import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'

const HomeScreen = () => {
  const [homeData, setHomeData] = useState([
    {id:1, name: "About", description: "texte descriptif de About"},
    {id:2, name: "histoire", description: "texte descriptif de histoire"},
    {id:3, name: "Goals", description: "texte descriptif de nos objectifs"},
  ])
  return (
    <SafeAreaView style={styles.container}>
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
      <Text style={styles.text}>Home page</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

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
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Presentation = ({navigation}) => {
    const handlerLogin = () => {
        navigation.navigate('Login')
        // console.log(navigation);
    }
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ marginTop:2, flexDirection:'row-reverse' }}>
                <TouchableOpacity
                    onPress={handlerLogin }
                >
                    <Text style={{ backgroundColor: 'forestgreen', padding:4, borderRadius:10 }}>
                        <Ionicons name='log-in' size={15}/>
                        Login
                        </Text>
                </TouchableOpacity>
            </View>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quo blanditiis placeat esse ratione ipsum fuga similique eos
                accusantium corporis, commodi inventore autem voluptatibus,
                non repellat reiciendis itaque minus mollitia repudiandae vel
                dolores totam quisquam. Magnam nesciunt, et suscipit ipsum neque
                in laudantium magni eius aut, labore omnis asperiores maiores,
                voluptatibus aspernatur nobis! Excepturi fugiat consequatur laudantium
                ut facilis sint, temporibus dolorum eligendi officiis pariatur ipsam
                vero praesentium harum aliquid, totam cum asperiores accusantium sed odit
                quam facere, nobis accusamus eaque? Tenetur suscipit iusto, recusandae sed,
                officia vel quibusdam ex quod ipsam cupiditate laboriosam! Blanditiis
                expedita incidunt eaque vitae debitis explicabo.
            </Text>
        </View>
    )
}

export default Presentation

const styles = StyleSheet.create({})
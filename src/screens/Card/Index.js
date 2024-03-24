import { View, Text, SafeAreaView, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { getCardService } from '../../services/httpApi';
import CreateCard from './Create';
import DeleteCard from './Delete';

const Card = () => {
    const [cards, setCards] = useState([
        // {title: "xxx", description: "eskfs"},
        // {title: "uiiu", description: "yty"},
        // {title: "yuy", description: "klji"},
    ]);
    const [status, setStatus] = useState();
    const [createCart, setCreateCart] = useState(false);

    const dataCard = async (limit = 10) => {

        await getCardService().then(res => {
            console.log(res.data);
            setCards(res.data.cards);
        }).catch(err => {
            console.log("dddd");
            console.log(err);
        });
    };

    useEffect(() => {
        dataCard();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <Pressable style={styles.addBtn} onPress={() =>setCreateCart(!createCart)}>
                    <Text style={styles.textBtn}>Nouvelle carte</Text>
                </Pressable>
            </View>
            {
                createCart ?
                    <CreateCard setCreateCart={setCreateCart} cards={cards} setCards={setCards} />
                    :
                    <View style={styles.listCard}>
                        <FlatList
                            data={cards}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.listCard}>
                                        <Text style={styles.cardTitle}>{item?.title}</Text>
                                        <Text style={styles.cardDescription} >{item.description}</Text>
                                        <Text >
                                            Montant :
                                            <Text style={styles.amount}>{item.amount}</Text>
                                        </Text>
                                        <DeleteCard id={item.id} setCards={setCards} />
                                    </View>
                                )

                            }}
                            ListEmptyComponent={
                                <Text style={styles.cardEmpty}>Aucune carte disponible</Text>
                            }
                        />
                    </View>
            }

        </SafeAreaView>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backGroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    container2: {
        backGroundColor: 'red'
    },
    listCard: {
        flex: 1,
        paddingHorizontal: 16,
        borderWidth: 1,
        padding: 10,
        margin: 4,
        borderRadius: 10

    },
    cardTitle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "blue"
    },
    cardDescription: {
        fontStyle: "italic"
    },
    cardEmpty: {
        textAlign: "center",
        fontStyle: "italic",
        color: "red"

    },
    addBtn: {
        paddingVertical: 5,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backGroundColor: 'red',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        borderRadius: 10

    },
    amount: {
        color: 'red',
        fontWeight: "bold",
    },
    textBtn: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
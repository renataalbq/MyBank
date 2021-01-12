import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Menu(){
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <MaterialIcons
                    name="monetization-on"
                    size={48}
                    color="#AAA"
                    />
                    <Text style={styles.texto}>Pagar</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <MaterialIcons
                    name="swap-horiz"
                    size={48}
                    color="#AAA"
                    />
                    <Text style={styles.texto}>Transferir</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <MaterialIcons
                    name="payment"
                    size={48}
                    color="#AAA"
                    />
                    <Text style={styles.texto}>Depositar</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <MaterialIcons
                    name="add-circle"
                    size={48}
                    color="#AAA"
                    />
                    <Text style={styles.texto}>Pix</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "#FFF",
        width: '90%',
        flexDirection: 'row',
        flexWrap: "wrap",
        padding: 5,
        margin: 20
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 10,
        paddingHorizontal: 10,

        
    },
    inner:{
        flex: 1,
        backgroundColor: '#F2F1EF',
        alignItems: 'center',
        justifyContent: 'center',

    },
    texto:{
        fontSize: 18,
        color: "#AAA",
        textTransform: "uppercase",
        margin: 2,
        alignSelf: "center",
        fontWeight: "bold",
        paddingTop: 5,
    }
    
})
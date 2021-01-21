import React, {useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header(){

    const [isVisible, setIsVisible] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
    }

    return(
        <View>
            <View>
                <Text style={styles.title}>MyBank</Text>
                <MaterialIcons style={styles.menu}
                    name="menu"
                    size={30}
                    color="#FFF"
                />

            </View>

            <Text style={styles.texto}>Saldo</Text>
            <Text style={styles.valor}>R$ {isVisible ? '334,45' : '-----'} </Text>

           
            <MaterialIcons style={styles.view} onPress={handleToggleVisibility}
                name={isVisible ? "visibility-off" : "visibility"}
                size={28}
                color="#AAA"
            />
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#FFF",
        marginTop: 30,
        textAlign: 'center',
    },
    texto: {
        fontSize: 16,
        color: "#AAA",
        textTransform: 'uppercase',
        paddingTop: 35,
        paddingLeft: 30,
    },
    valor: {
        fontSize: 30,
        color: "#AAA",
        paddingLeft: 30,
        fontWeight: 'bold',
    },
    menu:{
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingTop: 40,
        paddingRight: 15,
    },
    view: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingTop: 135,
        paddingRight: 30,
        

    }



});
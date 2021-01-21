import React, {useState} from 'react';
import { StyleSheet, View,  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Titulo, Texto, Valor, Row} from './style'

export default function Header(){

    const [isVisible, setIsVisible] = useState(true);

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
    }

    return(
        <View>
            <View>
                <Titulo>MyBank</Titulo>
                <MaterialIcons style={styles.menu}
                    name="menu"
                    size={30}
                    color="#FFF"
                />
            </View>

            <Texto>Saldo</Texto>

            <Row>
                <Valor>R$ {isVisible ? '334,45' : '-----'}</Valor>
                <MaterialIcons style={styles.view} onPress={handleToggleVisibility}
                    name={isVisible ? "visibility-off" : "visibility"}
                    size={30}
                    color="#AAA"
                />
            </Row>
      
        </View>
    )    
}

const styles = StyleSheet.create({
    menu: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        paddingTop: 40,
        paddingRight: 15,
    },
    view:{
        paddingTop: 8,
    }

})
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from './src/components/Header'
import Menu from './src/components/Menu'
import Lista from './src/components/Lista'


export default function App() {
    return (
        <LinearGradient
            colors={['#FFDC4B', '#FFF']}
            style={{
                flex: 1,
            }}>
            
                <View style={styles.container}>

                    <Header />
                    <Menu />
                    <Lista />

                </View>

                <StatusBar style="auto" />



        </LinearGradient>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
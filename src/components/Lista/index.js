import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'

export const ListaStyle = styled.View`
    background-color: #FFF;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: #AAA;
    padding: 0px 1px 10px 1px;
    align-self: center;

`

export const ListaContent = styled.View`
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #AAA;
    padding: 2px
    margin-bottom: 2px;
`

export const ListaItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`

export const ListaText = styled.Text`
    color: #AAA;
    margin-left: 2px;
    padding: 2px;
    font-weight: bold;
    font-size: 16px;
    padding-right: 140px;

`

export const ListaValor = styled.Text`
    color: #AAA;
    padding-right: 10px;
    font-weight: bold;

`

export const ListaDesc = styled.Text`
    margin: 2px;
    color: #AAA;
    padding-left: 2px;

`

export const ListaData = styled.Text`
    color: #AAA;
    padding: 10px;

`


export default function Lista(){
    return(
        <ListaStyle>
            <ListaContent>
                <ListaItem>
                    <ListaText>Compra no débito</ListaText>
                    <ListaValor>38,60</ListaValor>
                </ListaItem>
                <ListaItem>
                    <ListaDesc>Ifd*br</ListaDesc>
                    <ListaData>12/06/2020</ListaData>
                </ListaItem>
            </ListaContent>
            <ListaContent>
                <ListaItem>
                    <ListaText>Transferência recebida</ListaText>
                    <ListaValor>104,20</ListaValor>
                </ListaItem>
                <ListaItem>
                    <ListaDesc>Roberto Souza Filho</ListaDesc>
                    <ListaData>10/06/2020</ListaData>
                </ListaItem>
            </ListaContent>
            <ListaContent>
                <ListaItem>
                    <ListaText>Compra no débito</ListaText>
                    <ListaValor>25,00</ListaValor>
                </ListaItem>
                <ListaItem>
                    <ListaDesc>Padaria Unipão - JP</ListaDesc>
                    <ListaData>10/06/2020</ListaData>
                </ListaItem>
            </ListaContent>
            
        </ListaStyle>
    );
}
import React from 'react';
import {ListaStyle, Content, Item, Texto, Valor, Desc, Data} from './style';

export default function Lista(){
    return(
        <ListaStyle>
            <Content>
                <Item>
                    <Texto>Compra no débito</Texto>
                    <Valor>R$ 38,60</Valor>
                </Item>
                <Item>
                    <Desc>Ifd*br</Desc>
                    <Data>12/06/2020</Data>
                </Item>
            </Content>
            <Content>
                <Item>
                    <Texto>Transferência recebida</Texto>
                    <Valor>R$ 104,20</Valor>
                </Item>
                <Item>
                    <Desc>Roberto Souza Filho</Desc>
                    <Data>10/06/2020</Data>
                </Item>
            </Content>
            <Content>
                <Item>
                    <Texto>Compra no débito</Texto>
                    <Valor>R$ 25,00</Valor>
                </Item>
                <Item>
                    <Desc>Padaria Unipão - JP</Desc>
                    <Data>10/06/2020</Data>
                </Item>
            </Content>
            
        </ListaStyle>
    )
}
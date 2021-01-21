import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    padding: 5px;
    margin: 20px;
`

export const Box = styled.View`
    width: 50%;
    height: 50%;
    padding: 10px;
`

export const Inner = styled.View`
    flex: 1;
    background-color: #F2F1EF;
    align-items: center;
    justify-content: center;
`

export const Texto = styled.Text`
    font-size: 18px;
    color: #AAA;
    text-transform: uppercase;
    margin: 2px;
    padding-top: 5px;
    font-weight: bold;
`

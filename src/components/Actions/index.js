import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {Container, Box, Inner, Texto} from './style'

export default function Actions(){
    return(
        <Container>
            <Box>
                <Inner>
                    <MaterialIcons
                        name="monetization-on"
                        size={48}
                        color="#AAA"
                        />
                        <Texto>Pagar</Texto>
                </Inner>
            </Box>
            <Box>
                <Inner>
                    <MaterialIcons
                        name="swap-horiz"
                        size={48}
                        color="#AAA"
                        />
                        <Texto>Transferir</Texto>
                </Inner>
            </Box>
            <Box>
                <Inner>
                    <MaterialIcons
                        name="payment"
                        size={48}
                        color="#AAA"
                        />
                        <Texto>Depositar</Texto>
                </Inner>
            </Box>
            <Box>
                <Inner>
                    <MaterialIcons
                        name="add-circle"
                        size={48}
                        color="#AAA"
                        />
                        <Texto>Pix</Texto>
                </Inner>
            </Box>

        </Container>
    )
}

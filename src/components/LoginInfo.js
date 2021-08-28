import React, { useState } from 'react';
import {
    ChakraProvider,
    Flex,
    Text,
} from '@chakra-ui/react';

export function LoginInfo() {

    return (
        <ChakraProvider>
            <Flex flexDirection="column" justifyContent="space-between">
            <Text fontSize="2xl" paddingTop="0.4em" color="black">
                Gere um certificado de expertise em Strateegia e compartilhe nas suas redes.
            </Text>
            <Text fontSize="1xl" color="grey">
                Entre com seu login e senha do Strateegia ao lado para começar.
            </Text>
            </Flex>
        </ChakraProvider>
    );
}
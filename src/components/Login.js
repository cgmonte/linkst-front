// import React, { useState } from 'react';
import {
    ChakraProvider,
    Flex,
    Image,
} from '@chakra-ui/react';

import { LoginForm } from './LoginForm'
import { LoginInfo } from './LoginInfo'

export function Login() {

    return (
        <ChakraProvider>
            <Flex width="full" height="100vh" alignContent="center" alignItems="center" justifyContent="center">
                <Flex width="50%" justifyContent="center">
                    <LoginForm />
                </Flex>
                <Flex height="100vh" width="50%" backgroundColor="#148CFB" paddingLeft="4vw" paddingTop="20vw">
                    <LoginInfo />
                    <Image src="polygons.svg" height="40vw" position="absolute" right="0px" bottom="0px" />
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}
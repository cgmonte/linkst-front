// import React, { useState } from 'react';
import {
    ChakraProvider,
    Flex,
    Divider
} from '@chakra-ui/react';

import { LoginForm } from './LoginForm'
import { LoginInfo } from './LoginInfo'

export function Login() {

    return (
        <ChakraProvider>
            <Flex width="full" height="100vh" alignContent="center" alignItems="center" justifyContent="center">
                <Flex p={8} maxHeight="400px" height="50vh" maxWidth="700px">
                    <LoginInfo />
                    <Divider orientation="vertical" marginLeft="10"/>
                    <LoginForm />
                </Flex>
            </Flex>
        </ChakraProvider>
    );
}
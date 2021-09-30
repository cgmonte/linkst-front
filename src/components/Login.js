import React from "react";

import {
    ChakraProvider,
    Flex,
    Image,
    Text,
    Link
} from '@chakra-ui/react';

import { LoginForm } from './LoginForm'
// import { LoginInfo } from './LoginInfo'

export function Login() {

    return (
        <ChakraProvider>
            <Flex width="full" height="100vh" alignContent="center" alignItems="center" justifyContent="center" flexDirection="column" backgroundColor="whitesmoke">
                <Text fontSize="2xl" textAlign="center" fontWeight="semibold">
                    Gere um certificado de experiência  na plataforma <Link> strateegia.digital </Link> <br /> e adicione ao seu perfil do LinkedIn! :)
                </Text>

                <Flex width="fit-content" alignItems="center" flexDirection="column" boxShadow="md" margin="8em" padding="3em" backgroundColor="white">
                    <Image src="linkest_logo.png" width="24em" marginTop="1em"/>
                    <LoginForm />
                </Flex>

                {/* <Flex height="100vh" width="50%" backgroundColor="#148CFB" paddingLeft="4vw" paddingTop="20vw">
                    
                    <LoginInfo />
                    <Image src="polygons.svg" height="40vw" position="absolute" right="0px" bottom="0px" />
                </Flex> */}
            </Flex>
        </ChakraProvider>
    );
}
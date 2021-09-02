import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button
} from '@chakra-ui/react';

import { useHistory } from "react-router-dom";

import UserSession from '../components/UserSession';

export function Profile() {

    const history = useHistory();

    let full_name = UserSession.getName()

    function handleClick() {

        UserSession.removeToken()
        UserSession.removeId()
        UserSession.removeName()

        history.push("/login");
    }

    return (
        <ChakraProvider>
            {!UserSession.getToken() ? (

                history.push("/login")

            ) : (
                <Flex width="full" height="100vh" alignContent="center" alignItems="center" justifyContent="center">

                    <Flex flexDirection="column" justifyContent="space-between">
                        <Text fontSize="2xl" paddingTop="0.4em" color="black">
                            Olá, {full_name}
                        </Text>
                        <Box textAlign="center">
                            {/* <Text>{props.email} logged in!</Text> */}
                            <Button
                                width="full"
                                mt={4}
                                onClick={handleClick}>
                                Sign out
                            </Button>
                        </Box>

                    </Flex>
                </Flex>
            )}
        </ChakraProvider>
    );
}
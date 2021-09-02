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

    let token = UserSession.getToken()

    function handleClick() {
        
        UserSession.removeToken()
        UserSession.removeId()
        UserSession.removeName()
        
        history.push("/login");
    }

    return (
        <ChakraProvider>
            <Flex flexDirection="column" justifyContent="space-between">
                <Text fontSize="2xl" paddingTop="0.4em" color="black">
                    Profile
                    {token}
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
        </ChakraProvider>
    );
}
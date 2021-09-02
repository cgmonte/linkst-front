import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button
} from '@chakra-ui/react';

import { useHistory } from "react-router-dom";


// import React, { setState } from 'react';

// import { strateegiaUserMe } from '../api/StrateegiaUserMe'

// function HomeButton() {
//     const history = useHistory();



export function Profile() {

    const history = useHistory();

    function handleClick() {
        history.push("/login");
    }

    // const myInfo = await strateegiaUserMe({ token: props.location.state.token })

    // const myInfo = await strateegiaUserMe({ token: this.props.location.state.token })

    // console.log(myInfo)

    return (
        <ChakraProvider>
            <Flex flexDirection="column" justifyContent="space-between">
                <Text fontSize="2xl" paddingTop="0.4em" color="black">
                    Profile
                    {/* {myInfo} */}
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
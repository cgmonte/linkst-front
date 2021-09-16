import React from "react";

import {
    Flex,
    Text,
    // Box,
} from '@chakra-ui/react';

// import UserSession from './UserSession';

class SideBarLinkedIn extends React.Component {

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" paddingTop="1em" width="14.5em">
                <Text>
                    Há várias formas de compartilhar a sua experiência no Strateegia! Escolha uma ao lado.
                </Text>
            </Flex>
        )
    }
}

export default SideBarLinkedIn;
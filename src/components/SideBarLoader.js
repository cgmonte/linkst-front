import React from "react";

import {
    Flex,
    Text,
    // Box,
} from '@chakra-ui/react';

// import UserSession from './UserSession';

class SideBarLoader extends React.Component {

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" paddingTop="1em" width="14.5em">
                <Text>
                    Estamos fazendo um levantamento dos seus dados no strateegia.
                </Text>
            </Flex>
        )
    }
}

export default SideBarLoader;
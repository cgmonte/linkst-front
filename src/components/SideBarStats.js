import React from "react";

import {
    Flex,
    Text,
    // Box,
} from '@chakra-ui/react';

// import UserSession from './UserSession';

class SideBarStats extends React.Component {

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" width="16em" height="39.6vw" paddingTop="1em">
                <Text>
                    Veja as estatísticas nas quais nos baseamos para gerar seu certificado e o quanto falta par atingir o próximo nível.
                </Text>
            </Flex>
        )
    }
}

export default SideBarStats;
import React from "react";

import {
    Flex,
    Text,
} from '@chakra-ui/react';

// import UserSession from './UserSession';

class SideBarStats extends React.Component {

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" paddingTop="1em" width="14.5em">
                <Text>
                    Veja as estatísticas nas quais nos baseamos para gerar seu certificado e o quanto falta par atingir o próximo nível.
                </Text>
            </Flex>
        )
    }
}

export default SideBarStats;
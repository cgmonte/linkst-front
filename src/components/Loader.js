import React from "react";

import {
    Flex,
    Text,
    Box,
    Progress
} from '@chakra-ui/react';

class Loader extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <>
                <Flex flexDirection="column" justifyContent="space-between">
                    <Flex flexDirection="column" alignItems="center">
                        <Text fontSize="2xl">
                            Carregando dados do Strateegia!
                        </Text>
                    </Flex>
                    <Box
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor="#E2E8F0"
                        marginY="2em"
                        padding="1em"
                    >
                        <Progress size="xs" isIndeterminate />
                    </Box>
                    <Flex flexDirection="column" alignItems="center">
                        <Text fontSize="1xl">
                            Isso pode levar algum tempo...
                        </Text>
                    </Flex>
                </Flex>
            </>
        )
    }
}

export default Loader;
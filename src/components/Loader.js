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
                <Flex width="65vw" height="39.6vw" alignItems="center" justifyContent="center">
                    <Flex flexDirection="column" >
                        <Flex flexDirection="column">
                            <Text fontSize="2xl">
                            Isso pode levar alguns minutos...
                            </Text>
                        </Flex>
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="#E2E8F0"
                            marginY="2em"
                            padding="1em"
                        >
                            <Progress size="xs" isIndeterminate colorScheme="teal"/>
                        </Box>
                        <Flex flexDirection="column" alignItems="center">
                            {/* <Text fontSize="1xl">
                                Isso pode levar alguns minutos...
                            </Text> */}
                        </Flex>
                    </Flex>
                </Flex>
            </>
        )
    }
}

export default Loader;
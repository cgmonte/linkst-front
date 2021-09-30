import React from "react";

import {
    Flex,
    Text,
    Box,
    Progress,
    AspectRatio
} from '@chakra-ui/react';

class Loader extends React.Component {

    render() {
        return (



            <AspectRatio ratio={16 / 9.76} width="62vw">
                <Flex
                    backgroundSize="cover"
                    position="relative"
                    id="statsss"
                    width="62vw"
                    flexDirection="row"
                    alignContent="start"
                    alignItems="start"
                    justifyContent="start !important"
                >
                    <Flex width="100%" height="100%" justifyContent="center">
                        <Flex width="100%" flexDirection="column" paddingX="2em" paddingTop="3em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                            <Flex width="65vw" height="39.6vw" alignItems="center" justifyContent="center">
                                <Flex flexDirection="column" >
                                    <Flex flexDirection="column">
                                        <Text fontSize="md">
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
                                        {/* <Progress size="sm" isAnimated hasStripe colorScheme="blue" /> */}
                                        <Progress size="sm" isAnimated hasStripe value={this.props.fetching_state[0]} colorScheme="blue"/>
                                    </Box>
                                    <Flex flexDirection="column" alignItems="center">
                                        <Text fontSize="sm">
                                            {this.props.fetching_state[1]}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>


                </Flex>
            </AspectRatio >
        )
    }
}

export default Loader;
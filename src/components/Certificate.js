import React from "react";

import {
    ChakraProvider,
    // Flex,
    Text,
    Box,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from '../components/UserSession';


class Certificate extends React.Component {

    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
    }

    render() {
        return (
            
                <ChakraProvider>
                    <AspectRatio ratio={16 / 9.76} width="65vw">
                        <Box backgroundImage="cert_background.png" backgroundSize="cover" position="relative" id="cert" boxShadow="2xl">

                            <Box position="absolute" right="20vw" top="16vw" fontWeight="bold">
                                <Text fontSize="1vw" paddingTop="0.4em" color="white" textAlign="right">
                                    Certificamos que
                                </Text>
                                <Text fontSize="1.3vw" paddingTop="0.4em" color="#52BAA8" textAlign="right" textTransform="uppercase">
                                    {this.full_name}
                                </Text>
                                <Text fontSize="1vw" paddingTop="0.4em" color="white" textAlign="right">
                                    atingiu o nível <Text as="span" color="#F5B333"> JR1 </Text> de experiência em Strateegia
                                </Text>
                            </Box>

                            <Box color="white" position="absolute" bottom="0px" right="0px" fontSize="0.9vw" padding="4.5vw">
                                <Text>
                                    Data de emissão:
                                </Text>
                                <Text>
                                {this.props.data.issue_date.day}/{this.props.data.issue_date.month}/{this.props.data.issue_date.year}
                                </Text>
                            </Box>

                        </Box>
                    </AspectRatio >
                </ChakraProvider>
        )
    }
}
export default Certificate;
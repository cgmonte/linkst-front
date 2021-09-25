import React from "react";

import {
    ChakraProvider,
    Text,
    Box,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from './UserSession';


class Certificate extends React.Component {

    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
    }

    // componentDidMount (){
    //     console.log(this.props.cert_type)
    // }


    render() {
        return (

            <ChakraProvider>
                <AspectRatio
                    ratio={16 / 9.76}
                    width="62vw"
                >
                    <Box
                        backgroundImage={"certs/" + this.props.cert_type + "_" + this.props.cert_level + ".png"}
                        backgroundSize="cover"
                        position="relative"
                        id="cert"
                        boxShadow="lg"
                        width="62vw"
                    >
                        <Box
                            position="absolute"
                            right="20vw"
                            top="16vw"
                            fontWeight="bold"
                        >
                            <Text
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                Certificamos que
                            </Text>
                            <Text
                                fontSize="1.3vw"
                                paddingTop="0.4em"
                                color="#52BAA8"
                                textAlign="right"
                                textTransform="uppercase"
                            >
                                {this.full_name}
                            </Text>
                            <Text
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right">
                                atingiu o nível <Text as="span" color="black"> {this.props.cert_level} </Text> de experiência em Strateegia
                            </Text>
                        </Box>

                        <Box
                            color="white"
                            position="absolute"
                            top="0px"
                            right="0px"
                            fontSize="0.9vw"
                            padding="8.5vw">
                            <Text>
                                Data de emissão:
                            </Text>
                            <Text>
                                {this.props.issue_date.day}/{this.props.issue_date.month}/{this.props.issue_date.year}
                            </Text>
                        </Box>

                    </Box>
                </AspectRatio >
            </ChakraProvider>
        )
    }
}
export default Certificate;
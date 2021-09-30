import React from "react";

import {
    Text,
    Box,
} from '@chakra-ui/react';

import UserSession from './UserSession';

class MentorCertText extends React.Component {

    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
    }

    render() {
        return (
            <>
                <Box
                    position="absolute"
                    right="19vw"
                    top="16vw"
                    width="35vw"
                >
                    {this.props.cert_level === 1 ? (
                        <>
                            <Text
                                fontSize="1.25vw"
                                paddingTop="0.4em"
                                color="black"
                                textAlign="right"
                            >
                                Certificamos que <Text as="span" color="#2D4FEE" textAlign="right" textTransform="uppercase" fontWeight="extrabold"> {this.full_name} </Text>
                            </Text>

                            <Text
                                fontSize="1.25vw"
                                paddingTop="0.4em"
                                color="black"
                                textAlign="right"
                            >
                                habilita <Text as="span" color="black" fontWeight="extrabold"> JORNADAS DE TRANSFORMAÇÃO ESTRATÉGICA </Text>
                            </Text>

                            <Text
                                fontSize="1.25vw"
                                paddingTop="0.4em"
                                color="black"
                                textAlign="right"
                            >
                                na plataforma <Text as="span" color="#E4345B" fontWeight="bold"> strateegia.digital </Text>
                            </Text>
                        </>
                    ) : (
                        <>
                            <Text
                                fontSize="1.25vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                Certificamos que <Text as="span" color="#36C8B5" textAlign="right" textTransform="uppercase" fontWeight="bold"> {this.full_name} </Text>
                            </Text>

                            <Text
                                fontSize="1.25vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                habilita <Text as="span" color="white" fontWeight="bold"> JORNADAS DE TRANSFORMAÇÃO ESTRATÉGICA </Text>
                            </Text>

                            <Text
                                fontSize="1.25vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                na plataforma <Text as="span" color="#F9B411" fontWeight="bold"> strateegia.digital </Text>
                            </Text>
                        </>
                    )}
                </Box >
                <Box
                    color={this.props.cert_level === 1 ? "black" : "white"}
                    position="absolute"
                    bottom="3.5vw"
                    right="19vw"
                    //paddingRight="9vw"
                    //paddingBottom="9.8vh"
                    fontSize="0.9vw"
                    textAlign="right"
                >
                    <Text>
                        Data de emissão: {this.props.issue_date.day}/{this.props.issue_date.month}/{this.props.issue_date.year}
                    </Text>
                    
                </Box>
            </>
        )
    }
}
export default MentorCertText;
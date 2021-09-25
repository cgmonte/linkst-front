import React from "react";

import {
    Text,
    Box,
} from '@chakra-ui/react';

import UserSession from './UserSession';

class ParticipanteCertText extends React.Component {

    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
    }

    // componentDidMount (){
    //     console.log(this.props.cert_type)
    // }

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
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="black"
                                textAlign="right"
                            >
                                Certificamos que <Text as="span" color="#7B1AE2" textAlign="right" textTransform="uppercase" fontWeight="bold"> {this.full_name} </Text> adquiriu
                            </Text>

                            <Text
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="black"
                                textAlign="right"
                            >
                                habilidades em <Text as="span" color="black" fontWeight="bold"> JORNADAS DE TRANSFORMAÇÃO DIGITAL </Text>
                            </Text>

                            <Text
                                fontSize="1vw"
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
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                Certificamos que <Text as="span" color="#F9B411" textAlign="right" textTransform="uppercase" fontWeight="bold"> {this.full_name} </Text> adquiriu
                            </Text>

                            <Text
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                habilidades em <Text as="span" color="white" fontWeight="bold"> JORNADAS DE TRANSFORMAÇÃO DIGITAL </Text>
                            </Text>

                            <Text
                                fontSize="1vw"
                                paddingTop="0.4em"
                                color="white"
                                textAlign="right"
                            >
                                na plataforma <Text as="span" color="#36C8B5" fontWeight="bold"> strateegia.digital </Text>
                            </Text>
                        </>
                    )}
                </Box >
                <Box
                    color={this.props.cert_level === 1 ? "black" : "white"}
                    position="absolute"
                    bottom="0px"
                    left="0px"
                    paddingLeft="14.85vw"
                    paddingBottom="7.5vw"
                    fontSize="0.9vw"
                >
                    <Text>
                        Data de emissão:
                    </Text>
                    <Text>
                        {this.props.issue_date.day}/{this.props.issue_date.month}/{this.props.issue_date.year}
                    </Text>
                </Box>
            </>
        )
    }
}
export default ParticipanteCertText;
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
                    width="60vh"
                    fontSize="1vw"
                    paddingTop="0.4em"
                    color="white"
                    textAlign="right">
                    adquiriu habilidades em <Text as="span" color="black"> JORNADAS DE TRANSFORMAÇÃO DIGITAL </Text> na plataforma strateegia.digital
                    {this.props.cert_level}
                </Text>
            </Box>
        )
    }
}
export default ParticipanteCertText;
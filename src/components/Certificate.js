import React from "react";

import {
    ChakraProvider,
    Text,
    Box,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from './UserSession';

import MentorCertText from "./MentorCertText";
import ParticipanteCertText from "./ParticipanteCertText";

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
                        backgroundImage={this.props.cert_type === 'participante' ?
                            "certs/" + this.props.cert_type + "_" + this.props.cert_level_participante + ".png"
                            : "certs/" + this.props.cert_type + "_" + this.props.cert_level_mentor + ".png" }
                        backgroundSize="cover"
                        position="relative"
                        id="cert"
                        boxShadow="lg"
                        width="62vw"
                    >
                        {this.props.cert_type === 'participante' && <ParticipanteCertText cert_level={this.props.cert_level_participante} />}
                        {this.props.cert_type === 'mentor' && <MentorCertText cert_level={this.props.cert_level_mentor} />}

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
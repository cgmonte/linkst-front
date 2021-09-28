import React from "react";

import {
    Box,
    AspectRatio,
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


            <AspectRatio
                ratio={16 / 9.76}
                width="62vw"
            >
                <Box
                    backgroundImage={this.props.cert_type === 'participante' ?
                        "certs/" + this.props.cert_type + "_" + this.props.cert_level_participante + ".png"
                        : "certs/" + this.props.cert_type + "_" + this.props.cert_level_mentor + ".png"}
                    backgroundSize="cover"
                    position="relative"
                    id="cert"
                    boxShadow="lg"
                    width="62vw"
                >

                    {/* <Text position="absolute" left="0px" top="0px">
                        cert_type {this.props.cert_type} | level participante {this.props.cert_level_participante} | level mentor {this.props.cert_level_mentor}
                    </Text> */}

                    {this.props.cert_type === 'participante' && <ParticipanteCertText
                        issue_date={this.props.issue_date}
                        cert_level={this.props.cert_level_participante}
                    />}

                    {this.props.cert_type === 'mentor' && <MentorCertText
                        issue_date={this.props.issue_date}
                        cert_level={this.props.cert_level_mentor}
                    />}

                </Box>
            </AspectRatio >

        )
    }
}
export default Certificate;
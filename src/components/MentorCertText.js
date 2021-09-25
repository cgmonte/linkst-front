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
                    fontSize="1vw"
                    paddingTop="0.4em"
                    color="white"
                    textAlign="right">
                    atingiu o nível <Text as="span" color="black"> {this.props.cert_level} </Text> de experiêncifsdfsdfsda em Strateegia
                </Text>
            </Box>
        )
    }
}
export default MentorCertText;
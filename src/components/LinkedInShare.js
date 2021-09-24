import React from "react";

import { withRouter } from 'react-router-dom';

import {
    Text,
    Progress,
    Flex,
    Box
} from "@chakra-ui/react"

import UserSession from './UserSession';

import { linkedInProfileData } from "../api/LinkedInApi";

const axios = require('axios');

class LinkedInShare extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            publishing: true,
            profile_data: {}
        };
        this.handleAccess = this.handleAccess.bind(this);
        this.getLinkedInProfileData = this.getLinkedInProfileData.bind(this);
    }

    getLinkedInProfileData = async ({ access_token }) => {
        let profile_data = await linkedInProfileData({ access_token: access_token })

        this.setState({ profile_data: profile_data }, function () {
            console.log(this.state.profile_data.id)
        })
    }

    handleAccess = ({ authorization_code }) => {

        let config = {
            headers: {
                'Content-Type': 'x-www-form-urlencoded',
            }
        }

        if (!UserSession.getAccessToken()) {
            axios.post('https://radiant-brushlands-64499.herokuapp.com/https://www.linkedin.com/oauth/v2/accessToken?'
                + 'grant_type=authorization_code&client_id=782r44eaplkfzr&client_secret=VGKnUhm3eZPNl5Io&redirect_uri=http://localhost:3000/share&code=' + authorization_code, config
            )
                .then(function (response) {


                    if (response !== undefined) {
                        console.log('essa é a resposta completa:', response, 'Essa é a resposta data.access_token:', response.data.access_token)
                        UserSession.setAccessToken(response.data.access_token, response.data.expires_in);

                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // window.close();
                    // always executed
                });
        }
    };

    componentDidMount() {

        this.handleAccess({ authorization_code: this.props.location.search.slice(6) })
        this.getLinkedInProfileData({ access_token: UserSession.getAccessToken() })
        // window.opener.postMessage({ 'access_token': UserSession.getAccessToken() });
        // close the popup
        // window.close();
        // }
    }

    render() {
        return (

            <Flex width="100%" height="100vh" alignItems="center" justifyContent="center">
                <Flex flexDirection="column" >
                    {this.state.publishing ? (
                        <>
                            <Flex flexDirection="column">
                                <Text fontSize="xl">
                                    Olá, {this.state.profile_data.localizedFirstName}

                                </Text>
                                <Text fontSize="sm" marginBottom="6em">
                                    LinkedIn user ID {this.state.profile_data.id}

                                </Text>
                                <Text fontSize="md">
                                    Aguarde, estamos fazendo a postagem na sua timeline!
                                </Text>
                            </Flex>
                            <Box
                                borderWidth="1px"
                                borderRadius="lg"
                                borderColor="#E2E8F0"
                                marginY="2em"
                                padding="1em"
                            >
                                <Progress size="sm" isAnimated hasStripe isIndeterminate colorScheme="teal" />
                            </Box> </>
                    ) : (
                        <Text fontSize="xl">Postagem completa!</Text>
                    )}

                </Flex>
            </Flex>


        )
    }
}

// export default LinkedInShare;
export default withRouter(LinkedInShare);
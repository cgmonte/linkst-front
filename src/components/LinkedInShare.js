import React from "react";

import { withRouter } from 'react-router-dom';

import {
    Text,
    Progress,
    Flex,
    Box
} from "@chakra-ui/react"

import UserSession from './UserSession';

import { linkedInProfileData, ShareText } from "../api/LinkedInApi";

const axios = require('axios');

class LinkedInShare extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            publishing: true,
            profile_data: {},
            shared: false
        };
        this.handleAccess = this.handleAccess.bind(this);
        this.getLinkedInProfileData = this.getLinkedInProfileData.bind(this);
        this.shareOnLinkedIn = this.shareOnLinkedIn.bind(this);
    }

    getLinkedInProfileData = async ({ access_token }) => {
        let profile_data = await linkedInProfileData({ access_token: access_token })

        this.setState({ profile_data: profile_data }, async function () {
            await ShareText({ access_token: access_token, author: this.state.profile_data.id })
            // this.shareOnLinkedIn({ access_token: UserSession.getAccessToken(), author: this.state.profile_data.id })
        })
    }

    shareOnLinkedIn = async ({ access_token, author }) => {
        let share_response = await ShareText({ access_token: access_token, author: author })
        console.log(share_response)

        this.setState({ shared: true }, function () {
            console.log('compartilhado!', share_response)
            
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
        // this.shareOnLinkedIn({ access_token: UserSession.getAccessToken(), author: this.state.profile_data.id })
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
import React from "react";

import {
    Flex,
    Box,
    Button,
    AspectRatio
} from '@chakra-ui/react';

import { openSignInWindow } from "./Popup";

// import { linkedInProfileData } from "../api/LinkedInApi";

// import { LinkedInAuth } from '../api/LinkedInApi'

const axios = require('axios');

class LinkedIn extends React.Component {
    constructor(props) {
        super(props)
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickShare = this.handleClickShare.bind(this)
        // this.receiveMessage = this.receiveMessage.bind(this)
        // this.getLinkedInProfileData = this.getLinkedInProfileData.bind(this)
    }

    handleClickAdd() {
        let url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Habilidades%20em%20jornadas%20de%20transformação%20digital&organizationId=76088100&issueYear=${this.props.issue_date.year}&issueMonth=${this.props.issue_date.month}`
        window.open(url, '_blank').focus();
    };

    handleClickShare = async () => {
        window.addEventListener('message', event => this.receiveMessage(event), false);
        axios.get('https://radiant-brushlands-64499.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?scope=r_liteprofile%20w_member_social', {
            params: {
                response_type: 'code',
                client_id: '782r44eaplkfzr',
                redirect_uri: 'http://localhost:3000/share',
                state: 'JSNCUEJH=83jfiD2çH83hidhs9',
                // scope: 'r_liteprofile%20w_member_social',
            }
        })
            .then(function (response) {
                // window.open(response.headers['x-final-url'], '_blank').focus();
                openSignInWindow(response.headers['x-final-url'], window, 'Login no LinkedIn', 600, 700)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    // getLinkedInProfileData = async ({ access_token }) => {
    //     // console.log('FOIIIII', access_token.access_token)
    //     let profile_data = await linkedInProfileData({ access_token: access_token.access_token })
    //     console.log('EEEEEE', profile_data)
    // }

    // receiveMessage = event => {

    //     // Do we trust the sender of this message? (might be
    //     // different from what we originally opened, for example).
    //     // if (event.origin !== BASE_URL) {
    //     //   return;
    //     // }

    //     const { data } = event;
    //     if (data !== undefined) {
    //         this.getLinkedInProfileData({ access_token: data })
    //     }

    //     // console.log('linkedInProfileData', linkedInProfileData(data.access_token))

    //     // if we trust the sender and the source is our popup
    //     // if (data.source === 'lma-login-redirect') {
    //     //   // get the URL params and redirect to our server to use Passport to auth/login
    //     //   const { payload } = data;
    //     //   const redirectUrl = `/auth/google/login${payload}`;
    //     //   window.location.pathname = redirectUrl;
    //     // }

    //     window.removeEventListener('message', this.receiveMessage);
    // };

    render() {
        return (

            <AspectRatio ratio={16 / 9.76} width="62vw">
                <Flex
                    backgroundSize="cover"
                    position="relative"
                    id="statsss"
                    width="62vw"
                    flexDirection="row"
                    alignContent="start"
                    alignItems="start"
                    justifyContent="start !important"
                >
                    <Flex width="50%" height="100%" paddingX="2em" paddingY="2em" justifyContent="center">
                        <Flex width="95%" flexDirection="column" paddingX="2em" paddingY="2em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                            <p>Adicione o certificado ao perfil do LinkedIn</p>
                            <Box flexGrow="1" />
                            <Button
                                colorScheme="teal"
                                isDisabled={false}
                                size="md"
                                width="16em"
                                mt={4}
                                onClick={this.handleClickAdd}
                            >
                                Adicionar ao perfil do LinkedIn
                            </Button>
                        </Flex>
                    </Flex>

                    <Flex width="50%" height="100%" paddingX="2em" paddingY="2em" justifyContent="center">
                        <Flex width="95%" flexDirection="column" paddingX="2em" paddingY="2em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                            <p>Publicar o certificado no seu feed do LinkedIn</p>
                            <Box flexGrow="1" />
                            <Button
                                colorScheme="teal"
                                isDisabled={false}
                                size="md"
                                width="16em"
                                mt={4}
                                onClick={this.handleClickShare}
                            >
                                Postar no feed do LinkedIn
                            </Button>
                        </Flex>
                    </Flex>

                </Flex>
            </AspectRatio>
        )
    }
}

export default LinkedIn;
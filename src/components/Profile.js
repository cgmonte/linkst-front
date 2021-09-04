import React from "react";

import { withRouter } from 'react-router-dom';

import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button
} from '@chakra-ui/react';

import UserSession from '../components/UserSession';

import {
    strateegiaProjects,
    // strateegiaMissions,
    // strateegiaContents,
    // strateegiaConvergencePoints,
    // strateegiaCheckPoints,
    // strateegiaComments
} from '../api/StrateegiaData';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stData: [],
            soma_projetos: 0,
            fetching: false,
        };
        this.full_name = UserSession.getName()

        this.handleClick = this.handleClick.bind(this)

        this.getStData = this.getStData.bind(this)

        // this.getStData(UserSession.getToken())
    }

    async getStData(access_token) {
        try {
            const projects = await strateegiaProjects({ token: access_token });
            this.state.stData = projects;
            this.state.stData.forEach(lab => this.state.soma_projetos += lab.projects.length);
            this.setState({ soma_projetos: this.state.soma_projetos })
        } catch (e) {
            return e;
        }
        setTimeout(function() {
            this.setState({ fetching: false });
          }.bind(this), 3000);
        
    };

    handleClick() {

        UserSession.removeToken()
        UserSession.removeId()
        UserSession.removeName()

        this.props.history.push("/login");
    };

    componentDidMount() {
        this.setState({ fetching: true });
        this.getStData(UserSession.getToken())

    }

    render() {

        return (
            <ChakraProvider>
                {!UserSession.getToken() ? (

                    this.props.history.push("/login")

                ) : (
                    <Flex width="full" height="100vh" alignContent="center" alignItems="center" justifyContent="center">

                        <Flex flexDirection="column" justifyContent="space-between">

                            {this.state.fetching ? (

                                <Text>
                                    Carregando dados do Strateegia!
                                </Text>

                            ) : (
                                <div>
                                    <Text fontSize="2xl" paddingTop="0.4em" color="black">
                                        Olá, {this.full_name}.
                                    </Text>
                                    <Text>
                                        Você participou de um total de {this.state.soma_projetos} projetos inovadores no Strateegia.
                                    </Text>

                                    < Box textAlign="center">
                                        {/* <Text>{props.email} logged in!</Text> */}
                                        <Button
                                            width="full"
                                            mt={4}
                                            onClick={this.handleClick}>
                                            Sign out
                                        </Button>
                                    </Box>
                                </div>
                            )

                            }
                        </Flex>
                    </Flex>
                )
                }
            </ChakraProvider>
        );
    }
}

export default withRouter(Profile);

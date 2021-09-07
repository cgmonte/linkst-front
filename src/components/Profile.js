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

import { getStraeegiaData } from '../api/StrateegiaData';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stData: [],
            number_of_projects: 0,
            number_of_missions: 0,
            fetching: false,
        };
        this.full_name = UserSession.getName()

        this.handleClick = this.handleClick.bind(this)

        this.getStData = this.getStData.bind(this)
    }

    async getStData(access_token) {
        const strateegiaData = await getStraeegiaData({ token: access_token });
        this.setState({ number_of_projects: strateegiaData[0].stProjects.length });
        this.setState({ number_of_missions: strateegiaData[0].stMissions.length });

        setTimeout(function () {
            this.setState({ fetching: false });
        }.bind(this), 3000);
    }

    componentDidMount() {
        this.setState({ fetching: true });
        this.getStData(UserSession.getToken())

    }

    handleClick() {

        UserSession.removeToken()
        UserSession.removeId()
        UserSession.removeName()

        this.props.history.push("/login");
    };

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
                                        {this.state.number_of_projects} projetos inovadores.

                                    </Text>
                                    <Text>
                                        {this.state.number_of_missions} jornadas de inovação.
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
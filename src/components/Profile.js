import React from "react";

import { withRouter } from 'react-router-dom';

import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button,
    Progress,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from '../components/UserSession';

// import { getStraeegiaData } from '../api/StrateegiaData';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stData: [],
            number_of_projects: 0,
            number_of_missions: 0,
            number_of_maps: 0,
            number_of_divergence_points: 0,
            number_of_convergence_points: 0,
            number_of_replies_from_user: 0,
            number_of_comment_replies_from_user: 0,
            fetching: false,
        };
        this.full_name = UserSession.getName()

        this.handleClick = this.handleClick.bind(this)

        this.getStData = this.getStData.bind(this)
    }

    async getStData(access_token) {
        // const strateegiaData = await getStraeegiaData({ token: access_token });
        // this.setState({ number_of_projects: strateegiaData[0].stProjects.length });
        // this.setState({ number_of_missions: strateegiaData[0].stMissions.length });
        // this.setState({ number_of_maps: strateegiaData[0].stMaps.length });
        // this.setState({ number_of_divergence_points: strateegiaData[0].stDivergencePoints.length });
        // this.setState({ number_of_convergence_points: strateegiaData[0].stConvergencePoints.length });
        // this.setState({ number_of_conversation_points: strateegiaData[0].stConversationPoints.length });
        // this.setState({ number_of_replies_from_user: strateegiaData[0].userStReplies.length });
        // this.setState({ number_of_comment_replies_from_user: strateegiaData[0].userCommentReplies.length });

        this.setState({ number_of_projects: 3 });
        this.setState({ number_of_missions: 5 });
        // this.setState({ number_of_maps: strateegiaData[0].stMaps.length });
        this.setState({ number_of_divergence_points: 29 });
        this.setState({ number_of_convergence_points: 1 });
        this.setState({ number_of_conversation_points: 12 });
        this.setState({ number_of_replies_from_user: 14 });
        this.setState({ number_of_comment_replies_from_user: 81 });

        this.setState({ fetching: false });
        //     setTimeout(function () {
        //         this.setState({ fetching: false });
        //     }.bind(this), 3000);
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
                                <div>
                                    <Flex flexDirection="column" alignItems="center">

                                        <Text fontSize="2xl">
                                            Carregando dados do Strateegia!
                                        </Text>
                                    </Flex>
                                    <Box
                                        // maxW="sm"
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        borderColor="#E2E8F0"
                                        // overflow="hidden"
                                        marginY="2em"
                                        padding="1em"
                                    // display="inline"
                                    >
                                        <Progress size="xs" isIndeterminate />
                                    </Box>
                                    <Flex flexDirection="column" alignItems="center">
                                        <Text fontSize="1xl">
                                            Isso pode levar algum tempo...
                                        </Text>
                                    </Flex>
                                </div>



                            ) : (
                                <Flex alignItems="flex-end">
                                    <AspectRatio ratio={16 / 9} minW="70vw" maxW="80vw">
                                        <Box backgroundImage="cert_background.png" backgroundSize="cover" position="relative">
                                            <Box position="absolute">
                                                <Text fontSize="xl" paddingTop="0.4em" color="white" textAlign="right">
                                                    Certificamos que
                                                </Text>
                                                <Text fontSize="3xl" paddingTop="0.4em" color="white" textAlign="right">
                                                    {this.full_name}
                                                </Text>
                                                <Text fontSize="x1" paddingTop="0.4em" color="white" textAlign="right">
                                                    é um inovador strateegia.
                                                </Text>
                                            </Box>
                                            <Box color="white" position="absolute" bottom="150px" right="150px" fontSize="xl">
                                                <Text>
                                                    {this.state.number_of_projects} projetos inovadores
                                                </Text>
                                                <Text>
                                                    {this.state.number_of_missions} jornadas de inovação
                                                </Text>
                                                <Text>
                                                    {this.state.number_of_divergence_points} pontos de divergência
                                                </Text>
                                                <Text>
                                                    {this.state.number_of_convergence_points} pontos de convergência
                                                </Text>
                                                <Text>
                                                    {this.state.number_of_conversation_points} pontos de conversação
                                                </Text>
                                                <Text>
                                                    {this.state.number_of_replies_from_user} respostas para perguntas estratégicas
                                                </Text>
                                                <Text>
                                                    {this.state.number_of_comment_replies_from_user} comentários em respostas para perguntas estratégicas
                                                </Text>
                                            </Box>
                                        </Box>
                                    </AspectRatio >
                                    < Flex textAlign="center" marginLeft="1.1em" flexDirection="column">
                                        <Button
                                            width="15em"
                                            mt={4}>
                                            Adicionar ao LinkedIn
                                        </Button>
                                        <Button
                                            width="15em"
                                            mt={4}>
                                            Postar no feed do LinkedIn
                                        </Button>
                                        <Button
                                            width="15em"
                                            mt={4}>
                                            Baixar como arquivo
                                        </Button>
                                        <Button
                                            width="15em"
                                            mt={4}
                                            onClick={this.handleClick}>
                                            Sair
                                        </Button>
                                    </Flex>
                                </Flex>
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
import React from "react";

import { withRouter } from 'react-router-dom';

import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button,
    Progress,
    Image
    // AspectRatio
} from '@chakra-ui/react';

// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

import UserSession from '../components/UserSession';

import Certificate from '../components/Certificate';

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


    // MyDoc = () => (
    //     <Document>
    //         <Page>
    //             <Certificate />
    //         </Page>
    //     </Document>
    // );





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
                                <Flex>

                                    <Certificate data={this.state} />

                                    < Flex textAlign="center" marginLeft="2.9vw" flexDirection="column" alignItems="center" height="auto" width="15em">

                                        <Image src="st-icon.png" width="5vw" />

                                        <Text fontSize="s" textAlign="left" marginTop="1vw" color="GrayText">
                                            Baseado em suas atividades na plataforma strateegia.digital,
                                            você obteve a certificação ao lado. No LinkedIn, é possível
                                            aidicionar a certificação ao seu perfil profissional e / ou posta-la na sua timeline.
                                            Veja opçções abaixo.
                                        </Text>

                                        <Box flexGrow="1" />
                                        <Button
                                            colorScheme="teal"
                                            isDisabled={true}
                                            size="md"
                                            width="16em"
                                            mt={4}>
                                            Adicionar ao perfil do LinkedIn
                                        </Button>
                                        <Button
                                            colorScheme="teal"
                                            isDisabled={true}
                                            size="md"
                                            width="16em"
                                            mt={4}>
                                            Postar no feed do LinkedIn
                                        </Button>
                                        <Button
                                            colorScheme="teal"
                                            size="md"
                                            width="16em"
                                            mt={4}
                                            onClick={this.handleDownloadClick}>
                                            Baixar como arquivo
                                        </Button>
                                        <Button
                                            colorScheme="teal"
                                            variant="outline"
                                            size="md"
                                            width="16em"
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
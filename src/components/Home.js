import React from "react";

import { withRouter } from 'react-router-dom';

import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";

import { saveAs } from 'file-saver';

import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button,
    Progress,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Portal,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/react';

import UserSession from './UserSession';

import Certificate from './Certificate';

import StatsTable from './StatsTable'

// import { getStraeegiaData } from '../api/StrateegiaData';

class Home extends React.Component {
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
            issue_date: {},
            fetching: false,
        };
        this.full_name = UserSession.getName()

        this.handleClickSair = this.handleClickSair.bind(this)

        this.handleClickAdd = this.handleClickAdd.bind(this)

        this.getStData = this.getStData.bind(this)
    }

    async getStData(access_token) {
        // const strateegiaData = await getStraeegiaData({ token: access_token });
        // this.setState({ number_of_projects: strateegiaData[0].stProjects.length });
        // this.setState({ number_of_missions: strateegiaData[0].stMissions.length });
        // // this.setState({ number_of_maps: strateegiaData[0].stMaps.length });
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
        // setTimeout(function () {
        //     this.setState({ fetching: false });
        // }.bind(this), 3000);
    }

    componentDidMount() {
        this.setState({ fetching: true });
        this.getStData(UserSession.getToken())
        this.setState({ issue_date: this.getCurrentDate() });
    }

    getCurrentDate() {
        const current_date = new Date().toISOString()
        return {
            date: current_date.split("T")[0],
            year: current_date.substring(0, 4),
            month: current_date.substring(6, 7),
            day: current_date.substring(8, 10)
        }
    }

    handleClickSair() {

        UserSession.removeToken()
        UserSession.removeId()
        UserSession.removeName()

        this.props.history.push("/login");
    };

    handleClickAdd() {

        let url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Experiência%20em%20Strateegia&organizationName=st%20Teste%20Studio&issueYear=${this.state.issue_date.year}&issueMonth=${this.state.issue_date.month}`

        window.open(url, '_blank').focus();
    };

    saveCertPdf() {
        const component = document.getElementById('cert');
        const pdf_file = new jsPDF({
            hotfixes: ["px_scaling"],
            orientation: "landscape",
            unit: "px",
            format: [1889, 1153]
        });
        if (pdf_file) {
            htmlToImage.toPng(component, {
                canvasWidth: 1889,
                canvasHeight: 1153,
                pixelRatio: 1
            })
                .then(img => {
                    pdf_file.addImage(img, 'PNG', 0, 0);
                    pdf_file.save('Certificado_Strateegia.pdf');
                });
        }
    }

    saveCertPng() {
        const component = document.getElementById('cert');

        htmlToImage.toPng(component, {
            canvasWidth: 1889,
            canvasHeight: 1153,
            // pixelRatio: 1
        })
            .then(png => {
                saveAs(png, 'Certificado_Strateegia.png');
            });
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

                                        <Text fontSize="s" textAlign="left" marginTop="1vw" color="GrayText" marginBottom="1em">
                                            O nível da certificação é calculado com base na sua atividade na plataforma strateegia.digital. Veja abaixo os dados nos quais nos baseamos para gerar o seu certificado.
                                        </Text>

                                        <StatsTable data={this.state} />

                                        <Box flexGrow="1" />
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
                                            isDisabled={false}
                                            size="md"
                                            width="16em"
                                            mt={4}
                                            onClick={this.handleClickAdd}>
                                            Adicionar ao perfil do LinkedIn
                                        </Button>
                                        <Popover placement="left-end" matchWidth={true}>
                                            <PopoverTrigger>
                                                <Button
                                                    colorScheme="teal"
                                                    size="md"
                                                    width="16em"
                                                    mt={4}>
                                                    Baixar como arquivo
                                                </Button>
                                            </PopoverTrigger>
                                            <Portal matchWidth={true}>
                                                <PopoverContent>
                                                    <PopoverArrow />
                                                    <PopoverHeader>Selecione o tipo de arquivo para baixar</PopoverHeader>
                                                    <PopoverCloseButton />
                                                    <PopoverBody>
                                                        <Button
                                                            // colorScheme="teal"
                                                            size="md"
                                                            mt={4}
                                                            width="8em"
                                                            onClick={this.saveCertPng}>
                                                            PNG
                                                        </Button>
                                                        <Button
                                                            // colorScheme="teal"
                                                            size="md"
                                                            mt={4}
                                                            width="8em"
                                                            onClick={this.saveCertPdf}
                                                            marginLeft="1em">
                                                            PDF
                                                        </Button>
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Portal>
                                        </Popover>

                                        <Button
                                            colorScheme="teal"
                                            variant="outline"
                                            size="md"
                                            width="16em"
                                            mt={4}
                                            onClick={this.handleClickSair}>
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

export default withRouter(Home);
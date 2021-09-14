import React from "react";

import { withRouter } from 'react-router-dom';

import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    Button,
    Image,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from './UserSession';

import StatsTable from './StatsTable'

import { rankUserStData } from './Calc'

class Stats extends React.Component {
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

        this.getStData = this.getStData.bind(this)
        this.rankUserStData = rankUserStData.bind(this)

    }

    async getStData(access_token) {

        this.setState({ number_of_projects: 3 });
        this.setState({ number_of_missions: 5 });
        // this.setState({ number_of_maps: strateegiaData[0].stMaps.length });
        this.setState({ number_of_divergence_points: 29 });
        this.setState({ number_of_convergence_points: 1 });
        this.setState({ number_of_conversation_points: 12 });
        this.setState({ number_of_replies_from_user: 14 });
        this.setState({ number_of_comment_replies_from_user: 81 });
        // this.rankUserStData(this.state);

        this.setState({ fetching: false });
        // setTimeout(function () {
        //     this.setState({ fetching: false });
        // }.bind(this), 3000);
    }

    componentDidMount() {
        this.setState({ fetching: true });
        this.getStData(UserSession.getToken())
        this.setState({ issue_date: this.getCurrentDate() });
        // this.rankUserStData(this.state);

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


    render() {

        return (
            <ChakraProvider>
                {!UserSession.getToken() ? (

                    this.props.history.push("/login")

                ) : (
                    <Flex
                        width="full"
                        height="100vh"
                        alignContent="center"
                        alignItems="center"
                        justifyContent="center"
                    >

                        <Flex flexDirection="column" justifyContent="space-between">


                            <Flex>
                                <AspectRatio ratio={16 / 9.76} width="65vw">
                                    <Flex backgroundSize="cover" position="relative" id="cert" boxShadow="md" width="65vw">
                                            <StatsTable data={this.state} />
                                    </Flex>
                                </AspectRatio >



                                < Flex textAlign="center" marginLeft="2.9vw" flexDirection="column" alignItems="center" width="16em" height="39.6vw">

                                    <Image src="st-icon.png" width="5vw" />
                                    <Box minHeight="3em" overflow="auto">
                                        <Text fontSize="s" textAlign="left" marginTop="1vw" color="GrayText" marginBottom="1em">
                                            A tabela ao lado mostra suas estatísticas atuais e quanto você precisa para atingir os níveis de certificação.
                                        </Text>

                                    </Box>
                                    <Box flexGrow="1" />
                                    <Button
                                        colorScheme="teal"
                                        variant="outline"
                                        size="md"
                                        width="16em"
                                        mt={4}
                                        onClick={this.props.history.goBack}>

                                        Voltar
                                    </Button>

                                </Flex>
                            </Flex>

                        </Flex>
                    </Flex>
                )
                }
            </ChakraProvider>
        );
    }
}

export default withRouter(Stats);
import React from "react";

import reference_scores from './data/reference_scores.json';

import {
    ChakraProvider,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Heading,
    Text
} from "@chakra-ui/react"

import UserSession from '../components/UserSession';

class StatsTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            next_level_data: [{}]
        }
        this.full_name = UserSession.getName()
    }

    componentDidMount() {

        this.setState({
            next_level_data: reference_scores.filter(obj => {
                if (this.props.cert_level < 9) {
                    return obj.level === this.props.cert_level + 1
                } else {
                    return obj.level_name === this.props.cert_level
                }
            })
        },
            // function () {
            //     console.log(this.props.issue_date)
            // }
        )
    }

    render() {
        return (
            <ChakraProvider>
                <Box>
                    <Heading size="lg">{this.full_name}</Heading>
                    <Text textAlign="left" marginTop="1em" marginBottom="1em">Estatísticas do dia {this.props.issue_date.day}/{this.props.issue_date.month}/{this.props.issue_date.year}</Text>
                    <Box overflow="auto" maxHeight="45vh">
                        <Table variant="striped" size="sm" width="52vw" colorScheme="teal">
                            <Thead>
                                <Tr>
                                    <Th>Atividade</Th>
                                    <Th textAlign="right">Sua quantidade atual</Th>
                                    <Th textAlign="right">Próximo nível: {this.state.next_level_data[0].level}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Projetos</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_projects}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_projects}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Jornadas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_missions}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_missions}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de divergência</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_divergence_points}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_divergence_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de convergência</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_convergence_points}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_convergence_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de conversação</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_conversation_points}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_conversation_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Respostas para perguntas estratégicas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_replies_from_user}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_replies_from_user}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Comentários em respostas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_comment_replies_from_user}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_comment_replies_from_user}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </ChakraProvider >
        )
    }
}
export default StatsTable;
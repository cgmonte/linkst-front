import React from "react";

import reference_scores from './data/reference_scores.json';

import {
    ChakraProvider,
    Table,
    Thead,
    Tbody,
    TableCaption,
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
            next_level_data: {}
        };
        this.full_name = UserSession.getName()
        // this.next_level_data = [{}];
        this.getScoresFromCertTypes = this.getScoresFromCertTypes.bind(this)
    }

    getScoresFromCertTypes() {

        let next_level_data = [{}]

        if (this.props.cert_type === 'participante') {
            next_level_data = reference_scores.participante.filter(obj => {
                if (this.props.cert_level_participante < 3) {
                    return obj.level === this.props.cert_level_participante + 1
                } else {
                    return obj.level === this.props.cert_level_participante
                }
            })
        }

        if (this.props.cert_type === 'mentor') {
            next_level_data = reference_scores.mentor.filter(obj => {
                if (this.props.cert_level_mentor < 3) {
                    return obj.level === this.props.cert_level_mentor + 1
                } else {
                    return obj.level === this.props.cert_level_mentor
                }
            })
        }
        this.setState({ next_level_data: next_level_data[0] },
            // function () {
            //     console.log(this.state.next_level_data)
            // }
        )
    }

    componentDidMount() {
        this.getScoresFromCertTypes()
    }

    render() {
        return (
            <ChakraProvider>
                <Box>
                    <Heading size="lg">{this.full_name}</Heading>
                    <Text textAlign="left" marginTop="1em" marginBottom="1em">Estatísticas do dia {this.props.issue_date.day}/{this.props.issue_date.month}/{this.props.issue_date.year}</Text>
                    <Box overflow="auto" maxHeight="45vh" paddingTop="2vh">
                        <Table variant="striped" size="sm" width="52vw" colorScheme="teal">
                            <Thead>
                                <Tr>
                                    <Th fontSize="x-small">Atividade</Th>
                                    <Th fontSize="x-small" textAlign="right" >Quantidade atual</Th>
                                    <Th fontSize="x-small" textAlign="right">% Completo</Th>
                                    <Th fontSize="x-small" textAlign="right">Próximo nível: {this.state.next_level_data.level}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Jornadas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_projects}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_projects / this.state.next_level_data.number_of_projects) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_projects}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Mapas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_missions}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_missions / this.state.next_level_data.number_of_missions) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_missions}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de divergência</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_divergence_points}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_divergence_points / this.state.next_level_data.number_of_divergence_points) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_divergence_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de convergência</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_convergence_points}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_convergence_points / this.state.next_level_data.number_of_convergence_points) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_convergence_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de conversação</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_conversation_points}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_conversation_points / this.state.next_level_data.number_of_conversation_points) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_conversation_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Respostas para questões essenciais</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_replies_from_user}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_replies_from_user / this.state.next_level_data.number_of_replies_from_user) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_replies_from_user}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Comentários</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_comment_replies_from_user}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_comment_replies_from_user / this.state.next_level_data.number_of_comment_replies_from_user) * 100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_comment_replies_from_user}</Td>
                                </Tr>

                                {this.props.cert_type === 'mentor' ? (
                                    <Tr>
                                        <Td>Habilitações</Td>
                                        <Td isNumeric fontWeight="bold">{this.props.number_of_mentorships}</Td>
                                        <Td isNumeric>{Math.round((this.props.number_of_mentorships / this.state.next_level_data.number_of_mentorships) * 100)}%</Td>
                                        <Td isNumeric fontWeight="bold">{this.state.next_level_data.number_of_mentorships}</Td>
                                    </Tr>
                                ) : (
                                    <Tr></Tr>
                                )}

                            </Tbody>
                            <TableCaption textAlign="right">Você precisa de pelo menos 100% completo em todos os critétios para atingir o próximo nível. Os níveis são: 1. Iniciante; 2. Intermediário; 3. Avançado.</TableCaption>
                        </Table>
                    </Box>
                </Box>
            </ChakraProvider >
        )
    }
}
export default StatsTable;
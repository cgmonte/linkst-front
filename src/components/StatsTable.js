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
        this.full_name = UserSession.getName()
        this.next_level_data = [{}];
        this.getScoresFromCertTypes = this.getScoresFromCertTypes.bind(this)
    }

    getScoresFromCertTypes() {

        if (this.props.cert_type === 'participante') {
            this.next_level_data = reference_scores.participante.filter(obj => {
                if (this.props.cert_level_participante < 3) {
                    return obj.level === this.props.cert_level_participante + 1
                } else {
                    return obj.level === this.props.cert_level_participante
                }
            })
        }

        if (this.props.cert_type === 'mentor') {
            this.next_level_data = reference_scores.mentor.filter(obj => {
                if (this.props.cert_level_mentor < 3) {
                    return obj.level === this.props.cert_level_mentor + 1
                } else {
                    return obj.level === this.props.cert_level_mentor
                }
            })
            return this.next_level_data[0].number_of_mentorships
        }
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
                                    <Th fontSize="x-small" textAlign="right">Próximo nível: {this.next_level_data[0].level}</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Jornadas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_projects}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_projects/this.next_level_data[0].number_of_projects)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_projects}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Mapas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_missions}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_missions/this.next_level_data[0].number_of_missions)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_missions}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de divergência</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_divergence_points}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_divergence_points/this.next_level_data[0].number_of_divergence_points)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_divergence_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de convergência</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_convergence_points}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_convergence_points/this.next_level_data[0].number_of_convergence_points)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_convergence_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Pontos de conversação</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_conversation_points}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_conversation_points/this.next_level_data[0].number_of_conversation_points)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_conversation_points}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Respostas para questões essenciais</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_replies_from_user}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_replies_from_user/this.next_level_data[0].number_of_replies_from_user)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_replies_from_user}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Comentários</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_comment_replies_from_user}</Td>
                                    <Td isNumeric>{Math.round((this.props.number_of_comment_replies_from_user/this.next_level_data[0].number_of_comment_replies_from_user)*100)}%</Td>
                                    <Td isNumeric fontWeight="bold">{this.next_level_data[0].number_of_comment_replies_from_user}</Td>
                                </Tr>

                                {this.props.cert_type === 'mentor' ? (
                                    <Tr>
                                        <Td>Habilitações</Td>
                                        <Td isNumeric fontWeight="bold">{this.props.number_of_mentorships}</Td>
                                        <Td isNumeric>{Math.round((this.props.number_of_mentorships/this.getScoresFromCertTypes())*100)}%</Td>
                                        <Td isNumeric fontWeight="bold">{this.getScoresFromCertTypes()}</Td>
                                    </Tr>
                                ) : (
                                    <Tr></Tr>
                                )}

                            </Tbody>
                        </Table>
                    </Box>
                </Box>
            </ChakraProvider >
        )
    }
}
export default StatsTable;
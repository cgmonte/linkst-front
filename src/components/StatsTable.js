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
        this.getNextLevel = this.getNextLevel.bind(this)
    }

    getNextLevel() {

        let cert_level = '';

        if (this.props.cert_type === 'participante') {
            console.log('participante')
            switch (this.props.cert_level_participante) {
                case 1:
                    cert_level = 'Inicitante'
                    break;
                case 2:
                    cert_level = 'Intermediário'
                    break;
                case 3:
                    cert_level = 'Avançado'
                    break;
                default:
                    break;
            }
        } else {
            console.log('mentor')
            switch (this.props.cert_level_mentor) {
                case 1:
                    cert_level = 'Inicitante'
                    break;
                case 2:
                    cert_level = 'Intermediário'
                    break;
                case 3:
                    cert_level = 'Avançado'
                    break;
                default:
                    break;
            }
        }
        console.log('cert_level:', cert_level);
    };

    componentDidMount() {

        if (this.props.cert_type === 'participante') {
            this.setState({
                next_level_data: reference_scores.participante.filter(obj => {
                    if (this.props.cert_level_participante < 3) {
                        return obj.level === this.props.cert_level_participante + 1
                    } else {
                        return obj.level_name === this.props.cert_level_participante
                    }
                })
            })
        } else {
            this.setState({
                next_level_data: reference_scores.mentor.filter(obj => {
                    if (this.props.cert_level_mentor < 3) {
                        return obj.level === this.props.cert_level_mentor + 1
                    } else {
                        return obj.level_name === this.props.cert_level_mentor
                    }
                })
            })
        }
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
                                    <Td>Respostas para questões essenciais</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_replies_from_user}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_replies_from_user}</Td>
                                </Tr>
                                <Tr>
                                    <Td>Comentários em respostas</Td>
                                    <Td isNumeric fontWeight="bold">{this.props.number_of_comment_replies_from_user}</Td>
                                    <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_comment_replies_from_user}</Td>
                                </Tr>

                                {this.props.cert_type === 'mentor' ? (
                                    <Tr>
                                        <Td>Mentorias</Td>
                                        <Td isNumeric fontWeight="bold">{this.props.number_of_menthorships}</Td>
                                        <Td isNumeric fontWeight="bold">{this.state.next_level_data[0].number_of_menthorships}</Td>
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
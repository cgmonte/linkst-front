import React from "react";

// import reference_scores from './data/reference_scores.json';

import {
    ChakraProvider,
    Table,
    Thead,
    Tbody,
    // Tfoot,
    Tr,
    Th,
    Td,
    // TableCaption,
    Box,
    // Heading
} from "@chakra-ui/react"

// import UserSession from '../components/UserSession';

class StatsTable extends React.Component {


    render() {
        return (
            <ChakraProvider>
                <Box paddingTop="1em">
                    {/* <Heading>Título</Heading> */}
                    <Table variant="simple" size="md" width="60vw">
                        <Thead>
                            <Tr>
                                <Th>Atividade</Th>
                                <Th textAlign="right">Sua quantidade atual</Th>
                                <Th textAlign="right">Próximo nível: STB1</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Projetos</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_projects}</Td>
                                <Td isNumeric fontWeight="bold">10</Td>
                            </Tr>
                            <Tr>
                                <Td>Jornadas</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_missions}</Td>
                                <Td isNumeric fontWeight="bold">15</Td>
                            </Tr>
                            <Tr>
                                <Td>Pontos de divergência</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_divergence_points}</Td>
                                <Td isNumeric fontWeight="bold">40</Td>
                            </Tr>
                            <Tr>
                                <Td>Pontos de convergência</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_convergence_points}</Td>
                                <Td isNumeric fontWeight="bold">3</Td>
                            </Tr>
                            <Tr>
                                <Td>Pontos de conversação</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_conversation_points}</Td>
                                <Td isNumeric fontWeight="bold">5</Td>
                            </Tr>
                            <Tr>
                                <Td>Respostas para perguntas estratégicas</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_replies_from_user}</Td>
                                <Td isNumeric fontWeight="bold">25</Td>
                            </Tr>
                            <Tr>
                                <Td>Comentários em respostas</Td>
                                <Td isNumeric fontWeight="bold">{this.props.number_of_comment_replies_from_user}</Td>
                                <Td isNumeric fontWeight="bold">100</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </ChakraProvider>
        )
    }
}
export default StatsTable;
import React from "react";

import {
    ChakraProvider,
    Table,
    // Thead,
    Tbody,
    // Tfoot,
    Tr,
    // Th,
    Td,
    // TableCaption,
    Box
} from "@chakra-ui/react"

import UserSession from '../components/UserSession';

class StatsTable extends React.Component {

    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
    }

    render() {
        return (
            <ChakraProvider>
                <Box paddingTop="1em">
                    <Table variant="simple" size="sm">
                        <Tbody>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Projetos</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_projects}</Td>
                            </Tr>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Jornadas</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_missions}</Td>
                            </Tr>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Pontos de divergência</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_divergence_points}</Td>
                            </Tr>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Pontos de convergência</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_convergence_points}</Td>
                            </Tr>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Pontos de conversação</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_conversation_points}</Td>
                            </Tr>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Respostas para perguntas estratégicas</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_replies_from_user}</Td>
                            </Tr>
                            <Tr>
                                <Td paddingLeft="0" paddingRight="0">Comentários em respostas</Td>
                                <Td isNumeric fontWeight="bold" paddingLeft="0" paddingRight="0">{this.props.data.number_of_comment_replies_from_user}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </ChakraProvider>
        )
    }
}
export default StatsTable;
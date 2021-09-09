import React from "react";

import {
    ChakraProvider,
    // Flex,
    Text,
    Box,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from '../components/UserSession';


class Certificate extends React.Component {

    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
    }

    render() {
        return (
            <ChakraProvider>
                <AspectRatio ratio={16 / 9.76} minW="60vw" maxW="80vw">
                    <Box backgroundImage="cert_background.png" backgroundSize="cover" position="relative">

                        <Box position="absolute" right="26vw" top="13vw" fontWeight="bold">
                            <Text fontSize="1vw" paddingTop="0.4em" color="white" textAlign="right">
                                Certificamos que
                            </Text>
                            <Text fontSize="1.3vw" paddingTop="0.4em" color="#52BAA8" textAlign="right" textTransform="uppercase">
                                {this.full_name}
                            </Text>
                            <Text fontSize="1vw" paddingTop="0.4em" color="white" textAlign="right">
                                é um <Text as="span" color="#F5B333"> inovador strateegia.</Text>
                            </Text>
                        </Box>

                        <Box color="white" position="absolute" bottom="0px" right="0px" fontSize="0.9vw" padding="4.5vw">
                            <Text>
                                {this.props.data.number_of_projects} projetos inovadores
                            </Text>
                            <Text>
                                {this.props.data.number_of_missions} jornadas de inovação
                            </Text>
                            <Text>
                                {this.props.data.number_of_divergence_points} pontos de divergência
                            </Text>
                            <Text>
                                {this.props.data.number_of_convergence_points} pontos de convergência
                            </Text>
                            <Text>
                                {this.props.data.number_of_conversation_points} pontos de conversação
                            </Text>
                            <Text>
                                {this.props.data.number_of_replies_from_user} respostas para perguntas estratégicas
                            </Text>
                            <Text>
                                {this.props.data.number_of_comment_replies_from_user} comentários em respostas para perguntas <br/> estratégicas
                            </Text>
                        </Box>

                    </Box>
                </AspectRatio >
            </ChakraProvider>
        )} 
}
export default Certificate;
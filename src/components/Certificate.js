import React from "react";

import {
    ChakraProvider,
    Flex,
    Text,
    Box,
    AspectRatio
} from '@chakra-ui/react';

import UserSession from '../components/UserSession';


class Certificate extends React.Component {

    constructor(props) {
        super(props)
        

        this.full_name = UserSession.getName()

        console.log(props.data)

        // this.handleClick = this.handleClick.bind(this)

        // this.getStData = this.getStData.bind(this)
    }

    render() {
        return (
            <ChakraProvider>
                <AspectRatio ratio={16 / 9} minW="70vw" maxW="80vw">
                    <Box backgroundImage="cert_background.png" backgroundSize="cover" position="relative">
                        <Box position="absolute">
                            <Text fontSize="xl" paddingTop="0.4em" color="white" textAlign="right">
                                Certificamos que
                            </Text>
                            <Text fontSize="3xl" paddingTop="0.4em" color="white" textAlign="right">
                                {this.full_name}
                            </Text>
                            <Text fontSize="x1" paddingTop="0.4em" color="white" textAlign="right">
                                é um inovador strateegia.
                            </Text>
                        </Box>
                        <Box color="white" position="absolute" bottom="150px" right="150px" fontSize="xl">
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
                                {this.props.data.number_of_comment_replies_from_user} comentários em respostas para perguntas estratégicas
                            </Text>
                        </Box>
                    </Box>
                </AspectRatio >
                {/* <Text>Nada de mais</Text> */}
            </ChakraProvider>
        )} 
}
export default Certificate;
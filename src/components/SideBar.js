import React from "react";

import { withRouter } from 'react-router-dom';

import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";

import { saveAs } from 'file-saver';

import {
    Flex,
    Text,
    Box,
    Button,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    Portal,
    PopoverArrow,
    PopoverCloseButton,
    Link
} from '@chakra-ui/react';

import UserSession from './UserSession';

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.full_name = UserSession.getName()
        this.handleClickSair = this.handleClickSair.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
    }

    saveCertPng() {
        const component = document.getElementById('cert');

        htmlToImage.toPng(component, {
            canvasWidth: 1889,
            canvasHeight: 1153,
        })
            .then(png => {
                saveAs(png, 'Certificado_Strateegia.png');
            });
    }

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

    render() {
        return (
            < Flex textAlign="center" marginLeft="2.9vw" flexDirection="column" alignItems="center" width="16em" height="39.6vw">

                <Image src="st-icon.png" height="4em" />
                <Box minHeight="3em" overflow="auto">
                    <Text fontSize="s" textAlign="left" marginTop="1vw" color="GrayText" marginBottom="1em">
                        O nível da certificação é calculado com base na <Link color="teal.500" href="http://localhost:3000/stats"> sua atividade </Link> na plataforma strateegia.digital.
                    </Text>
                </Box>
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
                <Popover placement="left-end" matchWidth={true} trigger="hover">
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
        )
    }
}

export default withRouter(SideBar);
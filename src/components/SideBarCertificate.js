import React from "react";

import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";

import { saveAs } from 'file-saver';

import {
    Flex,
    Text,
    Button,
    VStack,
    Heading,
    Divider,

} from '@chakra-ui/react';

import { TiSocialLinkedin } from 'react-icons/ti';

import { IoMdImage } from 'react-icons/io';

import { AiFillFileImage } from 'react-icons/ai';


class SideBarCertificate extends React.Component {

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

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" width="14.5em" paddingTop="1em">
                <Text fontSize="md">
                    Geramos o certificado baseado nas suas estatísticas de uso da plataforma strateegia.digital.
                </Text>
                <br />


                <VStack spacing={0} align="stretch" colorScheme="teal">
                    <Divider />
                    <Heading as="h6" size="sm" paddingY="1em">
                        Compartilhar no LinkedIn
                    </Heading>
                    {/* <Divider /> */}

                    <Button
                        colorScheme="teal"
                        size="md"
                        mt={4}
                        variant="ghost"
                        onClick={this.saveCertPng}
                        width="100%" justifyContent="flex-start"
                        leftIcon={<TiSocialLinkedin />}
                    >
                        Adicionar ao perfil
                    </Button>
                    {/* <Divider /> */}
                    <Button
                        alignContent="start"
                        colorScheme="teal"
                        size="md"
                        mt={4}
                        variant="ghost"
                        onClick={this.saveCertPdf}
                        width="100%" justifyContent="flex-start"
                        leftIcon={<TiSocialLinkedin />}
                    >
                        Publicar no feed
                    </Button>
                    <Divider />
                    <Heading as="h6" size="sm" paddingY="1em">
                        Baixar certificado
                    </Heading>
                    {/* <Divider /> */}

                    <Button
                        colorScheme="teal"
                        size="md"
                        mt={4}
                        variant="ghost"
                        onClick={this.saveCertPng}
                        width="100%" justifyContent="flex-start"
                        leftIcon={<IoMdImage/>}
                    >
                        Arquivo PNG
                    </Button>
                    {/* <Divider /> */}
                    <Button
                        alignContent="start"
                        colorScheme="teal"
                        size="md"
                        mt={4}
                        variant="ghost"
                        onClick={this.saveCertPdf}
                        width="100%" justifyContent="flex-start"
                        leftIcon={<AiFillFileImage/>}
                    >
                        Arquivo PDF
                    </Button>
                </VStack>
            </Flex>
        )
    }
}

export default SideBarCertificate;
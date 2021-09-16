import React from "react";

import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";

import { saveAs } from 'file-saver';

import {
    Flex,
    Text,
    Button
} from '@chakra-ui/react';

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
                    Geramos os certificados ao lado baseados nas suas estatísticas de uso da plataforma strateegia.digital.
                </Text>
                <br />
                <Text>
                    Você pode baixar o certificado num dos formatos abaixo!
                </Text>
                <Flex marginTop="1em">
                    <Button
                        colorScheme="teal"
                        size="md"
                        mt={4}
                        width="6em"
                        onClick={this.saveCertPng}
                    >
                        PNG
                    </Button>
                    <Button
                        colorScheme="teal"
                        size="md"
                        mt={4}
                        width="6em"
                        marginLeft="1em"
                        onClick={this.saveCertPdf}
                    >
                        PDF
                    </Button>
                </Flex>
            </Flex>
        )
    }
}

export default SideBarCertificate;
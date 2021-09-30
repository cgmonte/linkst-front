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
    Switch,
    FormControl,
    FormLabel

} from '@chakra-ui/react';

// import { TiSocialLinkedin } from 'react-icons/ti';

import { IoMdImage } from 'react-icons/io';

import { AiFillFileImage } from 'react-icons/ai';

import { InAddModal } from "./InAddModal";

// import { InShareModal } from "./InShareModal";

class SideBarCertificate extends React.Component {
    // constructor(props) {
    //     super(props)

    // }

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
            < Flex textAlign="left" flexDirection="column" alignItems="left" width="13em" paddingTop="1em">
                <Text fontSize="sm" marginBottom="1em">
                    Geramos o certificado baseado nas suas estatísticas de uso da plataforma strateegia.digital.

                </Text>
                <br />

                {this.props.has_mentorship === true && <>
                    <FormControl display="flex" alignItems="center" marginBottom="1em">
                        {this.props.cert_type === 'participante' ? 
                        (
                        <Switch
                            id="modo-habilitador"
                            colorScheme="blue"
                            // onChange={console.log('eeeeeee isso ai')}
                            onChange={(e) => this.props.handleCertTypeUpdate()}

                        />
                        ):(
                            <Switch
                            defaultChecked
                            id="modo-habilitador"
                            colorScheme="blue"
                            // onChange={console.log('eeeeeee isso ai')}
                            onChange={(e) => this.props.handleCertTypeUpdate()}

                        />  
                        )
                    }
                        <FormLabel htmlFor="modo-habilitador" mb="0" marginLeft="0.5em" fontSize="sm">
                            Certificado Habilitador
                        </FormLabel>
                    </FormControl>
                </>}


                <VStack spacing={0} align="stretch">

                    <Divider />

                    <Heading as="h6" size="xs" paddingY="1em">
                        Compartilhar no LinkedIn
                    </Heading>

                    <InAddModal
                        cert_type={this.props.cert_type}
                        cert_level_participante={this.props.cert_level.cert_level_participante}
                        cert_level_mentor={this.props.cert_level.cert_level_mentor}
                        issue_date={this.props.issue_date}
                    />

                    {/* <InShareModal
                        cert_type={this.props.cert_type}
                        cert_level_participante={this.props.cert_level.cert_level_participante}
                        cert_level_mentor={this.props.cert_level.cert_level_mentor}
                        issue_date={this.props.issue_date}
                    /> */}

                    <Divider paddingTop="1em" />

                    <Heading as="h6" size="xs" paddingY="1em">
                        Baixar certificado
                    </Heading>

                    <Button
                        colorScheme="blue"
                        size="sm"
                        mt={4}
                        variant="ghost"
                        onClick={this.saveCertPng}
                        width="13em"
                        justifyContent="flex-start"
                        leftIcon={<IoMdImage />}
                    >
                        Arquivo PNG
                    </Button>

                    <Button
                        alignContent="start"
                        colorScheme="blue"
                        size="sm"
                        mt={4}
                        variant="ghost"
                        onClick={this.saveCertPdf}
                        width="13em" 
                        justifyContent="flex-start"
                        leftIcon={<AiFillFileImage />}
                    >
                        Arquivo PDF
                    </Button>
                </VStack>
            </Flex>
        )
    }
}

export default SideBarCertificate;
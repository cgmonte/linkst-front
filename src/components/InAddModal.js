import React from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
    Text
} from "@chakra-ui/react"

import { TiSocialLinkedin } from 'react-icons/ti';

function handleClickAdd(data) {

    let cert_name = '';
    let cert_level = '';

    if (data.cert_type === 'participante') {
        switch (data.cert_level_participante) {
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
        cert_name = 'Experiência em Jornadas de Transformação Digital na plataforma strateegia.digital - Nível ' + cert_level;
    } else {
        switch (data.cert_level_mentor) {
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
        cert_name = 'Experiência com habilitação de Jornadas de Transformação Digital na plataforma strateegia.digital - Nível ' + cert_level;
    }

    let url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${cert_name}&organizationId=76088100&issueYear=${data.issue_date.year}&issueMonth=${data.issue_date.month}`
    window.open(url, '_blank');
};

export function InAddModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                colorScheme="teal"
                size="sm"
                mt={4}
                variant="ghost"
                onClick={onOpen}
                width="100%" justifyContent="flex-start"
                leftIcon={<TiSocialLinkedin />}
            >
                Adicionar ao perfil
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Text >
                            Uma nova aba no seu navegador será aberta
                            com uma página do LinkedIn para você adicionar
                            o certificado ao seu perfil profissional.
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={onClose}>
                            Voltar
                        </Button>
                        <Button variant="ghost" colorScheme="teal" onClick={() => {
                            handleClickAdd(
                                {
                                    issue_date: props.issue_date,
                                    cert_type: props.cert_type,
                                    cert_level_participante: props.cert_level_participante,
                                    cert_level_mentor: props.cert_level_mentor
                                }
                            )
                        }}>
                            Adicionar ao perfil</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
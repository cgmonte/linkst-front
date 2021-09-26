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

function handleClickAdd() {
    let url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Habilidades%20em%20jornadas%20de%20transformação%20digital&organizationId=76088100&issueYear=${this.props.issue_date.year}&issueMonth=${this.props.issue_date.month}`
    window.open(url, '_blank').focus();
};

export function InAddModal() {
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
                        <Button variant="ghost" colorScheme="teal" onClick={handleClickAdd}>Adicionar ao perfil</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
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

import { openSignInWindow } from "./Popup";
    
const axios = require('axios');

const handleClickShare = async () => {
    window.addEventListener('message', event => this.receiveMessage(event), false);
    axios.get('https://radiant-brushlands-64499.herokuapp.com/https://www.linkedin.com/oauth/v2/authorization?scope=r_liteprofile%20w_member_social', {
        params: {
            response_type: 'code',
            client_id: '782r44eaplkfzr',
            redirect_uri: 'http://localhost:3000/share',
            state: 'JSNCUEJH=83jfiD2çH83hidhs9',
            // scope: 'r_liteprofile%20w_member_social',
        }
    })
        .then(function (response) {
            // window.open(response.headers['x-final-url'], '_blank').focus();
            openSignInWindow(response.headers['x-final-url'], window, 'Login no LinkedIn', 600, 700)
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
};

// function handleClickAdd(data) {

//     let cert_name = '';
//     let cert_level = '';

//     if (data.cert_type === 'participante') {
//         switch (data.cert_level_participante) {
//             case 1:
//                 cert_level = 'Inicitante'
//                 break;
//             case 2:
//                 cert_level = 'Intermediário'
//                 break;
//             case 3:
//                 cert_level = 'Avançado'
//                 break;
//             default:
//                 break;
//         }
//         cert_name = 'Experiência em Jornadas de Transformação Estratégica na plataforma strateegia.digital - Nível ' + cert_level;
//     } else {
//         switch (data.cert_level_mentor) {
//             case 1:
//                 cert_level = 'Inicitante'
//                 break;
//             case 2:
//                 cert_level = 'Intermediário'
//                 break;
//             case 3:
//                 cert_level = 'Avançado'
//                 break;
//             default:
//                 break;
//         }
//         cert_name = 'Experiência com habilitação de Jornadas de Transformação Estratégica na plataforma strateegia.digital - Nível ' + cert_level;
//     }

//     let url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${cert_name}&organizationId=76088100&issueYear=${data.issue_date.year}&issueMonth=${data.issue_date.month}`
//     window.open(url, '_blank');
// };

export function InShareModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                colorScheme="blue"
                size="sm"
                mt={4}
                variant="ghost"
                onClick={onOpen}
                width="100%" justifyContent="flex-start"
                leftIcon={<TiSocialLinkedin />}
            >
                Publicar no feed
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Text >
                            Uma janela do seu navegador será aberta
                            para você fazer login no LinkedIn e autorizar
                            este app a fazer postagens em seu nome no LinkedIn.
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Voltar
                        </Button>
                        <Button variant="ghost" colorScheme="blue" onClick={() => {
                            handleClickShare(
                                {
                                    issue_date: props.issue_date,
                                    cert_type: props.cert_type,
                                    cert_level_participante: props.cert_level_participante,
                                    cert_level_mentor: props.cert_level_mentor
                                }
                            )
                        }}>
                            Publicar no feed</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
import React from "react";

import {
    Flex,
    Text,
    // Button,
    VStack,
    Heading,
    Divider,
    Switch,
    FormControl,
    FormLabel

} from '@chakra-ui/react';

import { InAddModal } from "./InAddModal";

class SideBarStats extends React.Component {

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" width="14.5em" paddingTop="1em">
                <Text fontSize="sm">
                    Geramos o certificado baseado nas suas estatísticas de uso da plataforma strateegia.digital.

                </Text>
                <br />

                {this.props.has_mentorship === true && <>
                    <FormControl display="flex" alignItems="center" marginBottom="1em">
                        <Switch
                            id="modo-habilitador"
                            colorScheme="teal"
                            // onChange={console.log('eeeeeee isso ai')}
                            onChange={(e) => this.props.handleCertTypeUpdate()}

                        />
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
                </VStack>
            </Flex>
        )
    }
}

export default SideBarStats;
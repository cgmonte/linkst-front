import React from "react";

import {
    Flex,
    // Text,
    // Box,
    Button
} from '@chakra-ui/react';

// import UserSession from './UserSession';

class LinkedIn extends React.Component {



    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="left" width="16em" height="39.6vw" paddingTop="1em">
                <p>Publicar o certificado no seu feed do LinkedIn</p>

                <Button
                    colorScheme="teal"
                    isDisabled={true}
                    size="md"
                    width="16em"
                    mt={4}
                    marginBottom="2em"
                    >
                    Postar no feed do LinkedIn
                </Button>
                <p>Adicione o certificado ao perfil do LinkedIn</p>
                <Button
                    colorScheme="teal"
                    isDisabled={false}
                    size="md"
                    width="16em"
                    mt={4}
                    onClick={this.handleClickAdd}
                    >
                    Adicionar ao perfil do LinkedIn
                </Button>
            </Flex>
        )
    }
}

export default LinkedIn;
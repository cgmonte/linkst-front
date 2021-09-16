import React from "react";

import {
    Flex,
    // Text,
    Box,
    Button,
    AspectRatio
} from '@chakra-ui/react';

// import UserSession from './UserSession';

class LinkedIn extends React.Component {
    constructor(props) {
        super(props)
        // this.full_name = UserSession.getName()
        this.handleClickAdd = this.handleClickAdd.bind(this)
    }
    
    handleClickAdd() {
        // let url = '#';
        let url = `https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=Experiência%20em%20Strateegia&organizationName=st%20Teste%20Studio&issueYear=${this.props.issue_date.year}&issueMonth=${this.props.issue_date.month}`
        window.open(url, '_blank').focus();
        // console.log(this.props.issue_date)
    };

    render() {
        return (

            <AspectRatio ratio={16 / 9.76} width="62vw">
                <Flex
                    backgroundSize="cover"
                    position="relative"
                    id="statsss"
                    width="62vw"
                    flexDirection="row"
                    alignContent="start"
                    alignItems="start"
                    justifyContent="start !important"
                >
                    {/* < Flex textAlign="left" flexDirection="column" alignItems="left" width="16em" height="39.6vw" paddingTop="1em"> */}
                    <Flex  width="50%" height="100%" paddingX="2em" paddingY="2em" justifyContent="center">
                        <Flex width="95%" flexDirection="column" paddingX="2em" paddingY="2em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                        <p>Adicione o certificado ao perfil do LinkedIn</p>
                        <Box flexGrow="1"/>
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
                    </Flex>

                    <Flex  width="50%" height="100%" paddingX="2em" paddingY="2em" justifyContent="center">
                        <Flex width="95%" flexDirection="column" paddingX="2em" paddingY="2em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                        <p>Publicar o certificado no seu feed do LinkedIn</p>
                        <Box flexGrow="1"/>
                        <Button
                            colorScheme="teal"
                            isDisabled={true}
                            size="md"
                            width="16em"
                            mt={4}
                        >
                            Postar no feed do LinkedIn
                        </Button>
                        </Flex>
                    </Flex>

                </Flex>
            </AspectRatio>
        )
    }
}

export default LinkedIn;
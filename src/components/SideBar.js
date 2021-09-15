import React from "react";

import {
    Flex,
    Box,
    Button,
    Image,
} from '@chakra-ui/react';

import UserSession from './UserSession';

import SideBarCertificate from './SideBarCertificate'

import SideBarLinkedIn from './SideBarLinkedIn'

import SideBarStats from "./SideBarStats";

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
        this.handleClickSair = this.handleClickSair.bind(this)
        this.handleClickAdd = this.handleClickAdd.bind(this)
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
            < Flex textAlign="left" flexDirection="column" alignItems="center" width="16em" height="82vh">

                <Image src="st-icon.png" height="4em" />

                {this.props.tabIndex === 0 && <SideBarCertificate />}

                {this.props.tabIndex === 1 && <SideBarLinkedIn />}

                {this.props.tabIndex === 2 && <SideBarStats />}

                <Box flexGrow="1" />
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

export default SideBar;
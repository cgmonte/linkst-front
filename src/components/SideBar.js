import React from "react";

import { withRouter } from 'react-router-dom';

import {
    Flex,
    Button,
    Image,
} from '@chakra-ui/react';

import UserSession from './UserSession';

import SideBarCertificate from './SideBarCertificate'

import SideBarLinkedIn from './SideBarLinkedIn'

import SideBarStats from "./SideBarStats";

import SideBarLoader from "./SideBarLoader";

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.full_name = UserSession.getName()
        this.handleClickSair = this.handleClickSair.bind(this)
    }

    handleClickSair() {
        UserSession.removeToken()
        UserSession.removeId()
        UserSession.removeName()
        this.props.history.push("/login");
    };

    render() {
        return (
            < Flex textAlign="left" flexDirection="column" alignItems="start" width="16em" height="calc(39.6vw)" paddingTop="0.5rem">

                <Image src="st-icon.png" height="4em" />

                {this.props.tabIndex === 4 && <SideBarLoader />}

                {this.props.tabIndex === 0 && <SideBarCertificate has_mentorship={this.props.has_mentorship} />}

                {this.props.tabIndex === 1 && <SideBarLinkedIn />}

                {this.props.tabIndex === 2 && <SideBarStats />}

                {/* <Box flexGrow="1" /> */}
                <Button
                    // colorScheme="teal"
                    // variant="outline"
                    size="md"
                    width="12em"
                    mt={4}
                    onClick={this.handleClickSair}
                    >
                    Sair
                </Button>
            </Flex>
        )
    }
}

export default withRouter(SideBar);
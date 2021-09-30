import React from "react";

import { withRouter } from 'react-router-dom';

import {
    Flex,
    Button,
    Image,
    Box
} from '@chakra-ui/react';

import UserSession from './UserSession';

import SideBarCertificate from './SideBarCertificate'

// import SideBarLinkedIn from './SideBarLinkedIn'

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
            < Flex textAlign="left" flexDirection="column" alignItems="start" width="16em" height="auto" paddingBottom="0.9vh">

                <Image src="linkest_logo.png" height="5em" marginLeft="-0.8em"/>

                {this.props.fetching_st_data === true && <SideBarLoader />}

                {(this.props.tabIndex === 0 && this.props.fetching_st_data === false) && <SideBarCertificate
                    cert_type={this.props.cert_type}
                    has_mentorship={this.props.has_mentorship}
                    handleCertTypeUpdate={this.props.handleCertTypeUpdate}
                    cert_level={this.props.cert_level}
                    issue_date={this.props.issue_date}
                />}

                {/* {this.props.tabIndex === 1 && <SideBarLinkedIn />} */}

                {(this.props.tabIndex === 1 && this.props.fetching_st_data === false) && <SideBarStats
                    cert_type={this.props.cert_type}
                    has_mentorship={this.props.has_mentorship}
                    handleCertTypeUpdate={this.props.handleCertTypeUpdate}
                    cert_level={this.props.cert_level}
                    issue_date={this.props.issue_date}
                />}

                <Box flexGrow="1" />
                <Button
                    // colorScheme="blue"
                    // variant="outline"
                    size="sm"
                    width="13em"
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
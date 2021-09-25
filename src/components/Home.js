import React from "react";

import { withRouter } from 'react-router-dom';

import {
    Flex,
} from '@chakra-ui/react';

import UserSession from './UserSession';

import MainContent from "./MainContent";

import SideBar from "./SideBar";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0,
            has_mentorship: false,
            cert_type: 'participante'
        }
        this.handleTabIndexUpdate = this.handleTabIndexUpdate.bind(this)
        this.handleMentorshipUpdate = this.handleMentorshipUpdate.bind(this)
        this.handleCertTypeUpdate = this.handleCertTypeUpdate.bind(this)
    }

    handleTabIndexUpdate(tabIndex) {
        this.setState({ tabIndex: tabIndex },
            // function () {
            //     // console.log('aaaaaeeee', this.state.tabIndex)
            //     // this.props.handleTabIndexUpdate(this.state.tabIndex)
            // }
        );
    }

    handleMentorshipUpdate(has_mentorship) {

        this.setState({ has_mentorship: has_mentorship },
            // function () {
            //     this.props.handleTabIndexUpdate(this.state.tabIndex)
            // }
        );
    }

    handleCertTypeUpdate() {
        if (this.state.cert_type === 'participante') {
            this.setState({ cert_type: 'mentor' }, function () {
            });
        }
        else {
            this.setState({ cert_type: 'participante' }, function () {
            });
        }
    }

    render() {

        return (
            <>
                {!UserSession.getToken() ? (

                    this.props.history.push("/login")

                ) : (
                    <Flex
                        width="full"
                        height="100vh"
                        alignContent="center"
                        // alignItems="top"
                        justifyContent="center"
                        paddingTop="10vh"
                    >
                        {/* <SideBar tabIdenx={this.props.tabIdenx}/> <MainContent/> */}
                        <SideBar
                            tabIndex={this.state.tabIndex}
                            has_mentorship={this.state.has_mentorship}
                            handleCertTypeUpdate={this.handleCertTypeUpdate}
                        />
                        {/* <Text>{this.state.tabIndex}</Text> */}
                        <MainContent
                            cert_type={this.state.cert_type}
                            has_mentorship={this.state.has_mentorship}
                            handleTabIndexUpdate={this.handleTabIndexUpdate}
                            handleMentorshipUpdate={this.handleMentorshipUpdate}
                        />
                    </Flex>
                )
                }
            </>
        );
    }
}

export default withRouter(Home);
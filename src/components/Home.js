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
            tabIndex: 3,
            fetching_st_data: true,
            has_mentorship: false,
            cert_type: 'participante',
            cert_level: {},
            issue_date: {}
        }
        this.handleTabIndexUpdate = this.handleTabIndexUpdate.bind(this)
        this.handleMentorshipUpdate = this.handleMentorshipUpdate.bind(this)
        this.handleCertTypeUpdate = this.handleCertTypeUpdate.bind(this)
        this.handleCertLevelUpdate = this.handleCertLevelUpdate.bind(this)
        this.handleFetchingStDataUpdate = this.handleFetchingStDataUpdate.bind(this)
        this.getCurrentDate = this.getCurrentDate.bind(this)
    }

    getCurrentDate() {
        const current_date = new Date().toISOString()
        return {
            date: current_date.split("T")[0],
            year: current_date.substring(0, 4),
            month: current_date.substring(6, 7),
            day: current_date.substring(8, 10)
        }
    }

    handleFetchingStDataUpdate(fetching_st_data) {
        // console.log(fetching_st_data)
        this.setState({ fetching_st_data: fetching_st_data },
            // function () {
            //     // console.log('aaaaaeeee', this.state.tabIndex)
            //     // this.props.handleTabIndexUpdate(this.state.tabIndex)
            // }
        );
    }

    handleTabIndexUpdate(tabIndex) {
        // console.log(tabIndex)
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

    handleCertLevelUpdate(cert_level) {

        this.setState({ cert_level: cert_level },
            // function () {
            //     console.log('no home! hanglecertlevel', this.state.cert_level)
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

    componentDidMount() {
        this.setState({ issue_date: this.getCurrentDate() },
            function () {
                // console.log('ssssuldasdasssssaula', this.state.issue_date)
            });
        this.setState({ tabIndex: 3 })
    }

    render() {

        return (
            <>
                {!UserSession.getToken() ? (

                    this.props.history.push("/login")

                ) : (
                    <Flex
                        width="full"
                        height="fit-content"
                        alignContent="center"
                        // alignItems="top"
                        justifyContent="center"
                        paddingTop="10vh"
                    >
                        {/* <SideBar tabIdenx={this.props.tabIdenx}/> <MainContent/> */}
                        <SideBar
                            cert_type={this.state.cert_type}
                            fetching_st_data={this.state.fetching_st_data}
                            tabIndex={this.state.tabIndex}
                            has_mentorship={this.state.has_mentorship}
                            cert_level={this.state.cert_level}
                            issue_date={this.state.issue_date}
                            handleCertTypeUpdate={this.handleCertTypeUpdate}
                        />
                        {/* <Text>{this.state.tabIndex}</Text> */}
                        <MainContent
                            cert_type={this.state.cert_type}
                            has_mentorship={this.state.has_mentorship}
                            handleTabIndexUpdate={this.handleTabIndexUpdate}
                            handleMentorshipUpdate={this.handleMentorshipUpdate}
                            handleCertLevelUpdate={this.handleCertLevelUpdate}
                            handleFetchingStDataUpdate={this.handleFetchingStDataUpdate}
                        />
                    </Flex>
                )
                }
            </>
        );
    }
}

export default withRouter(Home);
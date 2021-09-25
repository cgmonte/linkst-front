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
            has_mentorship: false
        }
        this.handleTabIndexUpdate = this.handleTabIndexUpdate.bind(this)
        this.handleMenotshipUpdate = this.handleMenotshipUpdate.bind(this)
    }

    handleTabIndexUpdate(tabIndex) {
        this.setState({ tabIndex: tabIndex },
            // function () {
            //     // console.log('aaaaaeeee', this.state.tabIndex)
            //     // this.props.handleTabIndexUpdate(this.state.tabIndex)
            // }
        );
    }

    handleMenotshipUpdate(has_mentorship) {

        this.setState({ has_mentorship: has_mentorship },
            // function () {
            //     this.props.handleTabIndexUpdate(this.state.tabIndex)
            // }
        );
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
                        />
                        {/* <Text>{this.state.tabIndex}</Text> */}
                        <MainContent 
                        handleTabIndexUpdate={this.handleTabIndexUpdate} 
                        handleMenotshipUpdate={this.handleMenotshipUpdate} 
                        />
                    </Flex>
                )
                }
            </>
        );
    }
}

export default withRouter(Home);
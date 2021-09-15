import React from "react";

import { withRouter } from 'react-router-dom';

import {
    Flex,
} from '@chakra-ui/react';

import UserSession from './UserSession';

import MainContent from "./MainContent";

import SideBar from "./SideBar";


class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    // componentDidMount() {
    //     console.log('home montou')
    // }

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
                        alignItems="top"
                        justifyContent="center"
                        paddingTop="15vh"
                    >
                        <SideBar /> <MainContent/>
                        {/* <SideBar /> <MainContent/> */}
                    </Flex>
                )
                }
            </>
        );
    }
}

export default withRouter(Home);
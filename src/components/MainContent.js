import React from "react";

// import {
//     Text
// } from '@chakra-ui/react';

import { rankUserStData } from './Calc'

import ContentTabs from "./ContentTabs"

import Loader from "./Loader";

import UserSession from './UserSession';

import { getStraeegiaData } from '../api/StrateegiaData';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching_st_data: false,
            fetched_st_data: false,
            stData: {},
            cert_level: 'stb0',
            issue_date: {},
            tabIndex: 0
        };
        this.getStData = this.getStData.bind(this);
        this.rankUserStData = rankUserStData.bind(this);
        this.handleTabIndexUpdate = this.handleTabIndexUpdate.bind(this)
    }

    handleTabIndexUpdate(tabIndex) {
        this.setState({ tabIndex: tabIndex }, function () {
            // console.log('aaaaaeeee', this.state.tabIndex)
            this.props.handleTabIndexUpdate(this.state.tabIndex)
        });
    }

    async getStData(access_token) {
        const strateegiaData = await getStraeegiaData({ token: access_token });
        this.setState({
            stData: {
                'number_of_projects': strateegiaData[0].stProjects.length,
                'number_of_missions': strateegiaData[0].stMissions.length,
                'number_of_divergence_points': strateegiaData[0].stDivergencePoints.length,
                'number_of_convergence_points': strateegiaData[0].stConvergencePoints.length,
                'number_of_conversation_points': strateegiaData[0].stConversationPoints.length,
                'number_of_replies_from_user': strateegiaData[0].userStReplies.length,
                'number_of_comment_replies_from_user': strateegiaData[0].userCommentReplies.length
                // 'number_of_projects': 3,
                // 'number_of_missions': 5,
                // 'number_of_divergence_points': 29,
                // 'number_of_convergence_points': 1,
                // 'number_of_conversation_points': 8,
                // 'number_of_replies_from_user': 14,
                // 'number_of_comment_replies_from_user': 89
            }
        }, function () {
            // this.setState({ fetching_st_data: false });
            this.setState({ fetched_st_data: true });
            this.setState({ cert_level: this.rankUserStData(this.state.stData) });
        });
        
        setTimeout(function () {
            this.setState({ fetching_st_data: false });
        }.bind(this), 3000);
    }

    updateTabIndex() {
        
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

    componentDidMount() {
        this.setState({ fetching_st_data: true },
            // function () {
            //     console.log(this.state.fetching_st_data)
            // }
        );
        this.getStData(UserSession.getToken())
        this.setState({ issue_date: this.getCurrentDate() });

    }

    render() {
        if (this.state.fetching_st_data) {
            // You can render any custom fallback UI
            return (
                <Loader />
            );
        }

        return (
            <>
                {/* <Home tabIdenx={this.props.tabIdenx}/> */}
                <ContentTabs
                    // stData={this.state.stData}
                    cert_level={this.state.cert_level}
                    issue_date={this.state.issue_date}
                    number_of_projects = {this.state.stData.number_of_projects}
                    number_of_missions = {this.state.stData.number_of_missions}
                    number_of_divergence_points = {this.state.stData.number_of_divergence_points}
                    number_of_convergence_points = {this.state.stData.number_of_convergence_points}
                    number_of_conversation_points = {this.state.stData.number_of_conversation_points}
                    number_of_replies_from_user = {this.state.stData.number_of_replies_from_user}
                    number_of_comment_replies_from_user = {this.state.stData.number_of_comment_replies_from_user}
                    handleTabIndexUpdate = {this.handleTabIndexUpdate}
                />
            </>
        );
    }
}

export default MainContent;
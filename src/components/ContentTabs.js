import React from "react";

import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Flex,
} from "@chakra-ui/react"

import Certificate from "./Certificate";

// import LinkedIn from "./LinkedIn";

import Stats from "./Stats";

class ContentTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        };
    }

    handleTabsChange = (index) => {
        this.setState({ tabIndex: index }, function () {
            // this.props.handleTabIndexUpdate(this.state.tabIndex)
        });
    }

    componentDidMount() {
        // console.log(this.props.number_of_menthorships)
        this.handleTabsChange(0)
    }

    render() {
        return (
            <>
                <Flex width="65vw" height="39.6vw">
                    <Tabs index={this.state.tabIndex} onChange={this.handleTabsChange} size="sm" isFitted width="65vw" colorScheme="teal">
                        <TabList>
                            <Tab>Certificado</Tab>
                            <Tab>Estatísticas</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Box paddingTop="1vh">
                                    <Certificate
                                        cert_level_participante={this.props.cert_level_participante}
                                        cert_level_mentor={this.props.cert_level_mentor}
                                        issue_date={this.props.issue_date}
                                        cert_type={this.props.cert_type}
                                    />
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <Stats
                                    cert_level_participante={this.props.cert_level_participante}
                                    cert_level_mentor={this.props.cert_level_mentor}
                                    cert_type={this.props.cert_type}
                                    has_mentorship={this.props.has_mentorship}
                                    issue_date={this.props.issue_date}
                                    number_of_projects={this.props.number_of_projects}
                                    number_of_missions={this.props.number_of_missions}
                                    number_of_divergence_points={this.props.number_of_divergence_points}
                                    number_of_convergence_points={this.props.number_of_convergence_points}
                                    number_of_conversation_points={this.props.number_of_conversation_points}
                                    number_of_replies_from_user={this.props.number_of_replies_from_user}
                                    number_of_comment_replies_from_user={this.props.number_of_comment_replies_from_user}
                                    number_of_menthorships={this.props.number_of_mentorships}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </>
        )
    }
}

export default ContentTabs;
import React from "react";

import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Flex
} from "@chakra-ui/react"

import Certificate from "./Certificate";

import LinkedIn from "./LinkedIn";

import Stats from "./Stats";

class ContentTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        };
        // this.stData = this.props.stData;
    }

    handleTabsChange = (index) => {
        // console.log('vai', this.state.tabIndex);
        this.setState({ tabIndex: index }, function () {
            // console.log('foi', this.state.tabIndex)
            this.props.handleTabIndexUpdate(this.state.tabIndex)
        });
    }

    // componentDidMount() {
    //     // this.stData = this.props.stData;
    //     console.log('vai', this.state.tabIndex)
    // }

    render() {
        return (
            <>
                <Flex width="65vw" height="39.6vw" paddingTop="3em" paddingLeft="5em">
                    <Tabs index={this.state.tabIndex} onChange={this.handleTabsChange} size="md" isFitted width="65vw">
                        <TabList>
                            <Tab>1. Certificado</Tab>
                            <Tab>2. Compartilhar no LinkedIn</Tab>
                            <Tab>3. Estatísticas</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Box paddingTop="1vh">
                                    <Certificate
                                        cert_level={this.props.cert_level}
                                        issue_date={this.props.issue_date}
                                    />
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <LinkedIn />
                            </TabPanel>
                            <TabPanel>
                                <Stats
                                    cert_level={this.props.cert_level}
                                    issue_date={this.props.issue_date}
                                    number_of_projects={this.props.number_of_projects}
                                    number_of_missions={this.props.number_of_missions}
                                    number_of_divergence_points={this.props.number_of_divergence_points}
                                    number_of_convergence_points={this.props.number_of_convergence_points}
                                    number_of_conversation_points={this.props.number_of_conversation_points}
                                    number_of_replies_from_user={this.props.number_of_replies_from_user}
                                    number_of_comment_replies_from_user={this.props.number_of_comment_replies_from_user}
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
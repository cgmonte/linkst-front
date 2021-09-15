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

class ContentTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        };
        // this.stData = this.props.stData;
    }

    handleTabsChange = (index) => {
        this.setState({ tabIndex: index });
    }

    // componentDidMount() {
    //     // this.stData = this.props.stData;
    //     console.log('vai', this.stData)
    // }

    render() {
        return (
            <Flex width="65vw" height="39.6vw" paddingTop="3em" paddingLeft="5em">
                <Tabs index={this.state.tabIndex} onChange={this.handleTabsChange} size="md" isFitted width="65vw">
                    <TabList>
                        <Tab>1. Certificado</Tab>
                        <Tab>2. Compartilhar no LinkedIn</Tab>
                        <Tab>3. Estatísticas</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Certificate
                                cert_level={this.props.cert_level}
                                issue_date={this.props.issue_date}
                            />
                            {/* <p>{this.stData.number_of_projects}</p> */}
                        </TabPanel>
                        <TabPanel>
                            <p>Publicar o certificado no seu feed do LinkedIn</p>
                            <p>Adicione o certificado ao perfil do LinkedIn</p>

                        </TabPanel>
                        <TabPanel>
                            <p>Revise suas estatísticas e descubra como atingir o próximo nível de certificação</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        )
    }
}

export default ContentTabs;
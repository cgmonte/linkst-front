import React from "react";

import {
    Flex,
    AspectRatio
} from '@chakra-ui/react';

// import UserSession from './UserSession';

import StatsTable from './StatsTable'

class Stats extends React.Component {

    render() {

        return (

            <AspectRatio ratio={16 / 9.76} width="65vw">
                <Flex backgroundSize="cover" position="relative" id="cert" boxShadow="md" width="65vw">
                    <StatsTable
                        cert_level={this.props.cert_level}
                        // issue_date={this.props.issue_date}
                        number_of_projects={this.props.number_of_projects}
                        number_of_missions={this.props.number_of_missions}
                        number_of_divergence_points={this.props.number_of_divergence_points}
                        number_of_convergence_points={this.props.number_of_convergence_points}
                        number_of_conversation_points={this.props.number_of_conversation_points}
                        number_of_replies_from_user={this.props.number_of_replies_from_user}
                        number_of_comment_replies_from_user={this.props.number_of_comment_replies_from_user}
                    />
                </Flex>
            </AspectRatio >
        )
    }


}

export default Stats;
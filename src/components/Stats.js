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
            <AspectRatio ratio={16 / 9.76} width="62vw">
                <Flex
                    backgroundSize="cover"
                    position="relative"
                    id="statsss"
                    width="62vw"
                    flexDirection="row"
                    alignContent="start"
                    alignItems="start"
                    justifyContent="start !important"
                >
                    {/* < Flex textAlign="left" flexDirection="column" alignItems="left" width="16em" height="39.6vw" paddingTop="1em"> */}
                    <Flex  width="100%" height="100%" paddingX="0.7em" paddingY="2em" justifyContent="center">
                        <Flex width="95%" flexDirection="column" paddingX="2em" paddingY="2em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                        <StatsTable
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
                        </Flex>
                    </Flex>


                </Flex>
            </AspectRatio >
        )
    }


}

export default Stats;
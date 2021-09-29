import React from "react";

import {
    Flex,
    AspectRatio
} from '@chakra-ui/react';

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
                    <Flex width="100%" height="100%" justifyContent="center">
                        <Flex width="100%" flexDirection="column" paddingX="2em" paddingTop="3em" backgroundColor="whitesmoke" alignItems="center" border="1px" borderColor="lightgrey" borderRadius="md" boxShadow="sm">
                            <StatsTable
                                key={this.props.cert_type}
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
                                number_of_mentorships={this.props.number_of_mentorships}
                            />
                        </Flex>
                    </Flex>


                </Flex>
            </AspectRatio >
        )
    }


}

export default Stats;
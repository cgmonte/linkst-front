import reference_scores from './data/reference_scores.json';

export function rankUserStData(st_data, cert_type) {
    let achieved_levels = []
    if (cert_type.cert_type === 'participante') {
        reference_scores.participante.slice().reverse().forEach(
            function (reference_score) {
                // console.log('participante', reference_score)
                if (
                    st_data.stData.number_of_projects >= reference_score.number_of_projects &&
                    st_data.stData.number_of_missions >= reference_score.number_of_missions &&
                    st_data.stData.number_of_divergence_points >= reference_score.number_of_divergence_points &&
                    st_data.stData.number_of_convergence_points >= reference_score.number_of_convergence_points &&
                    st_data.stData.number_of_conversation_points >= reference_score.number_of_conversation_points &&
                    st_data.stData.number_of_replies_from_user >= reference_score.number_of_replies_from_user &&
                    st_data.stData.number_of_comment_replies_from_user >= reference_score.number_of_comment_replies_from_user
                ) {
                    achieved_levels.push(reference_score.level)
                }
            }
        )
    }
    if (cert_type.cert_type === 'mentor') {
        reference_scores.mentor.slice().reverse().forEach(
            function (reference_score) {
                // console.log('mentor', reference_score)
                if (
                    st_data.stData.number_of_projects >= reference_score.number_of_projects &&
                    st_data.stData.number_of_missions >= reference_score.number_of_missions &&
                    st_data.stData.number_of_divergence_points >= reference_score.number_of_divergence_points &&
                    st_data.stData.number_of_convergence_points >= reference_score.number_of_convergence_points &&
                    st_data.stData.number_of_conversation_points >= reference_score.number_of_conversation_points &&
                    st_data.stData.number_of_replies_from_user >= reference_score.number_of_replies_from_user &&
                    st_data.stData.number_of_comment_replies_from_user >= reference_score.number_of_comment_replies_from_user &&
                    st_data.stData.number_of_mentorships >= reference_score.number_of_mentorships
                ) {
                    achieved_levels.push(reference_score.level)
                }
            }
        )
    }

    const current_level = achieved_levels[0]
    return current_level
}
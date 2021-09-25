import reference_scores from './data/reference_scores.json';

export function rankUserStData(st_data) {
    let achieved_levels_participante = []
    let achieved_levels_mentor = []

    reference_scores.participante.slice().reverse().forEach(
        function (reference_score) {
            if (
                st_data.stData.number_of_projects >= reference_score.number_of_projects &&
                st_data.stData.number_of_missions >= reference_score.number_of_missions &&
                st_data.stData.number_of_divergence_points >= reference_score.number_of_divergence_points &&
                st_data.stData.number_of_convergence_points >= reference_score.number_of_convergence_points &&
                st_data.stData.number_of_conversation_points >= reference_score.number_of_conversation_points &&
                st_data.stData.number_of_replies_from_user >= reference_score.number_of_replies_from_user &&
                st_data.stData.number_of_comment_replies_from_user >= reference_score.number_of_comment_replies_from_user
            ) {
                achieved_levels_participante.push(reference_score.level)
            }
        }
    )
    //console.log('lista participante', achieved_levels_participante)

    reference_scores.mentor.slice().reverse().forEach(
        function (reference_score) {
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
                achieved_levels_mentor.push(reference_score.level)
            }
        }
    )
    //console.log('lista mentor', achieved_levels_mentor)

    const current_levels = {
        'achieved_levels_participante': (achieved_levels_participante.length >= 1 ? achieved_levels_participante[0] : 0),
        'achieved_levels_mentor': (achieved_levels_mentor.length >= 1 ? achieved_levels_mentor[0] : 0)
    }
    //console.log(current_levels)
    return current_levels
}
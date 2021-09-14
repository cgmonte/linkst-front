import reference_scores from './data/reference_scores.json';

export function rankUserStData(st_data) {

    let achieved_levels = []

    reference_scores.slice().reverse().forEach(
        function (reference_score) {
            if (
                st_data.number_of_projects >= reference_score.number_of_projects &&
                st_data.number_of_missions >= reference_score.number_of_missions &&
                st_data.number_of_divergence_points >= reference_score.number_of_divergence_points &&
                st_data.number_of_convergence_points >= reference_score.number_of_convergence_points &&
                st_data.number_of_conversation_points >= reference_score.number_of_conversation_points &&
                st_data.number_of_replies_from_user >= reference_score.number_of_replies_from_user &&
                st_data.number_of_comment_replies_from_user >= reference_score.number_of_comment_replies_from_user
            ) {
                achieved_levels.push(reference_score.level_name)
            }
        }
    )
    const current_level = achieved_levels[0]
    return current_level
}
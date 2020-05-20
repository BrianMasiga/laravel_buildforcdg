export default {
    loading(state) {
        return state.loading;
    },
    errors(state) {
        return state.errors;
    },
    alertEvent(state) {
        eventBus.$emit('alertEvent', state)
        // return state.alertEvent;
    },
    users(state) {
        return state.users
    },
    constituencies(state) {
        return state.constituencies
    },
    country(state) {
        return state.country
    },
    county(state) {
        return state.county
    },
    schools(state) {
        return state.schools
    },
    score_sets(state) {
        return state.score_sets
    },
    score_sheet(state) {
        return state.score_sheet
    },
    ward(state, ) {
        return state.ward
    },
    statistics(state) {
        return state.statistics
    },
}

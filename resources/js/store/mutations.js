export default {
    loading(state, payload) {
        state.loading = payload
    },
    errors(state, payload) {
        state.errors = payload
    },
    alertEvent(state, payload) {
        state.alertEvent = payload
    },
    updateConstituencies(state, payload) {
        state.constituencies = payload
    },
    updateCountry(state, payload) {
        state.country = payload
    },
    updateCounty(state, payload) {
        state.county = payload
    },
    updateSchool(state, payload) {
        state.schools = payload
    },
    updateScoreSets(state, payload) {
        state.score_sets = payload
    },
    updateScoreSheet(state, payload) {
        state.score_sheet = payload
    },
    updateWard(state, payload) {
        state.ward = payload
    },
    updateStatistics(state, payload) {
        state.statistics = payload
    },
}


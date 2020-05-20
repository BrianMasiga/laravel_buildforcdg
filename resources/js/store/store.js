import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
    state: {
        loading: false,
        errors: [],
        users: [],
        constituencies: [],
        country: [],
        county: [],
        schools: [],
        score_sets: [],
        score_sheet: [],
        ward: [],
        statistics: [],
    },
    getters,
    mutations,
    actions
}

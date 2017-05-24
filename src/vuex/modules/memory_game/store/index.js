import getters from '../getters';
import actions from '../actions';
import mutations from '../mutations';



const state = {
    leftMatched: 0,
    highestSpeed: 0,
    status: '',
    cards: [],
    elapsedMs: 0
};

export default {
    state,
    actions,
    mutations,
    getters,
    strict: process.env.NODE_ENV !== 'production'
};

import {TYPES} from '@/vuex/modules/memory_game/actions/types';


const state = {
    leftMatched: 0,
    highestSpeed: 0,
    status: '',
    cards: [],
    elapsedMs: 0
};

const mutations = {
    [TYPES.RESET](st, newState) {
        st.leftMatched = newState.leftMatched;
        st.highestSpeed = newState.highestSpeed;
        st.status = newState.status;
        st.cards = newState.cards;
        st.elapsedMs = newState.elapsedMs;
    },

    [TYPES.UPDATE_STATUS](st, newStatus) {
        st.status = newStatus;
    },

    [TYPES.DECREASE_MATCH](st) {
        st.leftMatched--;
    },

    [TYPES.FLIP](st, card) {
        var c = st.cards.find(cc => cc === card);
        c.flipped = !c.flipped;
    },

    [TYPES.FLIPS](st, cards) {
        st.cards
            .filter(cc => cards.indexOf(cc) >= 0)
            .forEach(cc => {
                cc.flipped = !cc.flipped;
            });
    },

    [TYPES.COUNTING](st) {
        st.elapsedMs++;
    },

    [TYPES.UPDATE_HIGHESTSPEED](st) {
        if (!localStorage.getItem('highestSpeed')) {
            return localStorage.setItem('highestSpeed', st.elapsedMs);
        }
        if (localStorage.getItem('highestSpeed') > st.elapsedMs) {
            return localStorage.setItem('highestSpeed', st.elapsedMs);
        }
    }
};

export default {
    state,
    mutations
};

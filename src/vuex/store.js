import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import memory_game from '@/vuex/modules/memory_game/store/index.js'
Vue.use(Vuex)

const state = {
    user:{
        token:localStorage.getItem('token')||""
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        memory_game
    }
})
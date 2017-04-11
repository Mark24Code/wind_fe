const actions = {
    user_token_set({commit},token){
        commit("USER_TOKEN_SET",token)
    },
    user_clear({commit}){
    commit("USER_CLEAR")
    },
}

export default actions

const mutations = {
    USER_TOKEN_SET(state,token){
        state.user.token = token
        localStorage.setItem('token',token)
    },
    USER_CLEAR(state){
        state.user.token=""
        localStorage.setItem('token','')
    }
}

export default mutations
const getters = {
    user:(state)=>{
        return state.user
    },
    user_token:(state)=>{
        return state.user.token
    }
}

export default getters
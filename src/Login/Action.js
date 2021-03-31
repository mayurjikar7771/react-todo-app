const actions = {
    USER_LOGIN: 'USER_LOGIN',
    userLogin :(payload) =>({type: actions.USER_LOGIN,payload}),

    STORE_USER: 'STORE_USER',
    storeUser : (payload) => ({type: actions.STORE_USER,payload})

}

export default actions;
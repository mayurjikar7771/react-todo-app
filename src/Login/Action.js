const actions = {
    USER_LOGIN: 'USER_LOGIN',
    userLogin :(playload) =>({type: actions.USER_LOGIN,playload}),

    STORE_USER: 'STORE_USER',
    storeUser : (playload) => ({type: actions.STORE_USER,playload}),

}

export default actions;
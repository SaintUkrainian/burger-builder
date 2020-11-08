const initialState = {
    token: null,
    userId: null,
    error: false,
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "login_start": return {
            ...state,
            loading: true,
        }
        case "login_success": return {
            ...state,
            userId: action.loginData.localId,
            token: action.loginData.idToken,
            loading: false,
            error: false,
        }
        case "login_fail": return {
            ...state,
            error: action.error,
            loading: false,
        }
        case "clear_error": return { 
            ...state,
            error: false,
        }
        default: return state;
    }
}

export default reducer;
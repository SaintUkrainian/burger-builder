import axios from "axios";

export const loginStart = () => {
    return {
        type: "login_start",
    };
};
export const loginSuccess = (loginData) => {
    return {
        type: "login_success",
        loginData: loginData,
    };
};
export const loginFail = (error) => {
    return {
        type: "login_fail",
        error: error,
    };
};

export const clearError = () => {
    return {
        type: "clear_error",
    }
}

export const logout = () => {
    return {
        type: "logout",
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => dispatch(logout()), expirationTime * 1000);
    }
}

export const login = (email, password, signInMode) => {
    return (dispatch) => {
        dispatch(loginStart());
        const url = signInMode
            ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy_nwRGXeKFxjCq9PeUY6bqbc35-apz14"
            : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDy_nwRGXeKFxjCq9PeUY6bqbc35-apz14";
        axios
            .post(url, {
                email: email,
                password: password,
                returnSecureToken: true,
            })
            .then((repsonse) => {
                console.log(repsonse);
                dispatch(loginSuccess(repsonse.data));
                dispatch(checkAuthTimeout(repsonse.data.expiresIn));
            })
            .catch((error) => {
                console.log(error);
                dispatch(loginFail(error));
            });
    };
};

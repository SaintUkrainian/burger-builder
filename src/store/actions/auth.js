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
    };
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("userId");
    return {
        type: "logout",
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => dispatch(logout()), expirationTime * 1000);
    };
};

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
                const expirationDate = new Date(
                    new Date().getTime() + repsonse.data.expiresIn * 1000
                );
                localStorage.setItem("token", repsonse.data.idToken);
                localStorage.setItem("expirationDate", expirationDate);
                localStorage.setItem("userId", repsonse.data.localId);
                dispatch(loginSuccess(repsonse.data));
                dispatch(checkAuthTimeout(repsonse.data.expiresIn));
            })
            .catch((error) => {
                console.log(error);
                dispatch(loginFail(error));
            });
    };
};

export const authCheckState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("token");
        if (!token) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem("userId");
            const expirationDate = new Date(
                localStorage.getItem("expirationDate")
            );
            if (expirationDate < new Date()) {
                dispatch(logout());
            } else {
                dispatch(loginSuccess({ idToken: token, localId: userId }));
                dispatch(
                    checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                );
            }
        }
    };
};

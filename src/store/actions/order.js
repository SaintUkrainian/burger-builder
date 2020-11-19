import axios from "../../axios-for-orders";

export const purchaseBurgerSuccess = () => {
    return {
        type: "order_success",
    };
};

export const orders = (orders) => {
    return {
        type: "init_orders",
        value: orders,
    };
};

export const initOrders = (token) => {
    return (dispatch) => {
        axios
            .get("/orders.json?auth=" + token)
            .then((response) => {
                const fetchedOrders = [];
                for (const key in response.data) {
                    fetchedOrders.push(response.data[key]);
                }
                dispatch(orders(fetchedOrders));
            })
            .catch((error) => {
                dispatch(initAuthError());
            });
    };
};

export const initAuthError = () => {
    return {
        type: "init_auth_fail",
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: "order_fail",
        error: error,
    };
};

export const startPurchasing = () => {
    return {
        type: "start_purchasing",
    };
};

export const purchaseBurgerStart = (orderData, token) => {
    return (dispatch) => {
        dispatch(startPurchasing());
        axios
            .post("/orders.json?auth=" + token, orderData)
            .then((response) => {
                console.log(response);
                dispatch(purchaseBurgerSuccess());
            })
            .catch((error) => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};

export const purchaseInit = () => {
    return {
        type: "purchase_init",
    };
};

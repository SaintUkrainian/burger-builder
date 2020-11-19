const initialState = {
    orders: null,
    fetchedOrders: false,
    purchasing: false,
    purchased: false,
    error: false,
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "order_success": return {
            ...state,
            purchasing: false,
            purchased: true,
        };
        case "order_fail": return {
            ...state, 
            purchasing: false,
            purchased: false,
        }; 
        case "start_purchasing": return {
            ...state,
            purchasing: true,
            purchased: false,
        }
        case "purchase_init": return {
            ...state,
            purchased: false,
        }
        case "init_orders": return {
            ...state,
            orders: action.value,
            fetchedOrders: true,
            error: false,
        }
        case "init_auth_fail": return {
            ...state,
            fetchedOrders: false,
            error: true,
        }
        default: return state;
    }
}

export default reducer;
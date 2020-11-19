const initialState = {
    ingredients: null,
    totalPrice: 1,
    error: false,
};

const ingredientPrices = {
    salad: 0.25,
    bacon: 2,
    cheese: 1,
    meat: 3,
};

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "add":
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]:
                        state.ingredients[action.ingredient] + 1,
                },
                totalPrice:
                    state.totalPrice + ingredientPrices[action.ingredient],
            };
        case "remove":
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]:
                        state.ingredients[action.ingredient] - 1,
                },
                totalPrice:
                    state.totalPrice - ingredientPrices[action.ingredient],
            };
        case "set":
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 1,
            };
        case "error":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 0,
};

const ingredientPrices = {
    salad: 0.25,
    bacon: 2,
    cheese: 1,
    meat: 3,
}

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
                totalPrice: state.totalPrice + ingredientPrices[action.ingredient],
            };
        case "remove":
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]:
                        state.ingredients[action.ingredient] - 1,
                },
                totalPrice: state.totalPrice - ingredientPrices[action.ingredient],
            };
        default:
            return state;
    }
};

export default reducer;

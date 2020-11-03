import axios from "../../axios-for-orders";

export const addIngredient = (type) => {
    return {
        type: "add",
        ingredient: type,
    };
};

export const removeIngredient = (type) => {
    return {
        type: "remove",
        ingredient: type,
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: "set",
        ingredients: ingredients,
    };
};

export const setError = () => {
    return {
        type: "error",
        error: true,
    }
}

export const initIngredients = () => {
    return (dispatch) => {
        axios.get("/ingredients.json")
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            dispatch(setError())
        });
    };
};

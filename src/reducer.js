export const reducer = (state, action) => {
    if (action.type === 'REMOVE_LOADING') {
        return {
            ...state,
            isLoading: false
        }
    }

    if (action.type === 'GET_ITEMS') {
        return {
            ...state,
            getItems: [...action.payload]
        }
    }

    if (action.type === 'AMOUNT_IN_CART') {
        return {
            ...state,
            amountItems: action.payload
        }
    }

    if (action.type === 'UPDATE_TOTAL_PRICE') {
        return {
            ...state,
            totalPrice: action.payload,
        }
    }

    throw new Error("there is no action type of such")
}
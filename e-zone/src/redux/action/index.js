// Adding items to the cart

export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// Deleting items in the cart

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    
    }
}
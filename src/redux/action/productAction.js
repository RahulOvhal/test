import { ActionTypes } from "../contants/action-type"

export const setProducts = (products)=>{
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products,
    }
}


export const selectProduct = (product)=>{
    return {
        type : ActionTypes.SELECTED_PRODUCTS,
        payload : product,
    }
}
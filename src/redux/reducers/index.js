
import { combineReducers } from "redux";
import { productReducer, selectProduct } from "./productReducer";

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProduct,
})

export default reducers;
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productLists: [],
        loading: true,
    },
    reducers: {
        PRODUCT_LIST_REQUEST: (products) => {
            products.loading = true;
        },
        PRODUCT_LIST_SUCCESS: (products, action) => {
            products.loading = false;
            products.productLists = action.payload;
        },
        PRODUCT_LIST_FAIL: (products, action) => {
            products.error = action.payload;
            products.loading = false;
        },
    },
});


export const selectProdById = (state, prodId) =>
    state.products.productLists.find((prod) => (prod.id === prodId));

export const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = productsSlice.actions;
export default productsSlice.reducer;

//Action Creators
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST.type,
        });

        const { data } = await axios.get('https://dummyjson.com/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

// After new release of redux, we don't need to install/use too many packages,
// we just need below.

// necessary packages
> npm install @reduxjs/toolkit react-redux

// store.js:
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './StateSlice/productsSlice';

const store = configureStore({
  reducer: { products: productsReducer },
});

export default store;

// productsSlice.js:
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

// Action creators are generated for each case reducer function
export const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } =
  productsSlice.actions;

export default productsSlice.reducer;

// Action Creators
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST.type,
    });

    const { data } = await axios.get('/api/products');

    dispatch({ type: PRODUCT_LIST_SUCCESS.type, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL.type, payload: error.message });
  }
};

// Apply to react, HomeScreen.jsx:
import React, { useEffect } from 'react';

import { LoadingBox, MessageBox, Product } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from './../store/StateSlice/productsSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // productsSlice -> name is "products"
  // productsSlice -> initial "productLists, loading"
  const products = useSelector((state) => state.products);
  const { loading, error, productLists } = products;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {productLists.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;

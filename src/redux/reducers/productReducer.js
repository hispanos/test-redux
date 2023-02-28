import { productType } from "../types/productType";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case productType.ADD_PRODUCT:
      return [...state, action.payload];

    case productType.DELETE_PRODUCT: 
      return state.filter((product) => product.id !== action.payload)

    default:
      return state;
  }
};

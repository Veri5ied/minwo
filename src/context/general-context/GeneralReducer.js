import { GET_PRODUCTS, GET_BY_CATEGORY } from "../types";

const GeneralReducer = (prevState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        products: payload,
      };
    case GET_BY_CATEGORY:
      return {
        ...prevState,
        products: payload,
      };
    default:
      return prevState;
  }
};

export default GeneralReducer;

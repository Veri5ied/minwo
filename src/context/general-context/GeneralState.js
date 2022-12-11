import { useReducer } from "react";
import GeneralContext from "./GeneralContext";
import GeneralReducer from "./GeneralReducer";
import { GET_PRODUCTS, GET_BY_CATEGORY } from "../types";
import { BASE_URI } from "../../utils/baseUri";
import axios from "axios";

const GeneralState = ({ children }) => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const getProducts = async ({ params }) => {
    const res = await axios.get(`${BASE_URI}/search?q=${params}`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  };

  const getByCategory = async ({ params }) => {
    const res = await axios.get(`${BASE_URI}/products/category/${params}`);
    dispatch({
      type: GET_BY_CATEGORY,
      payload: res.data,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        products: state.products,
        getProducts,
        getByCategory,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;

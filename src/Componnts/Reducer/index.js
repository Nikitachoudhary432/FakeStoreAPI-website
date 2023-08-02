import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartReducer from "./CartReducer";
import userReducer from "./UserReducer";

export const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  userReducer,
});

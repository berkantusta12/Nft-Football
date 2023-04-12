import { combineReducers } from "redux";
import { UPDATE_HEADER_PARAM } from "../actions";

const initialState = {
  headerParam: 100,
};

const headerParamReducer = (state = initialState.headerParam, action) => {
  switch (action.type) {
    case UPDATE_HEADER_PARAM:
      const newPrice = state - action.payload;
      if (newPrice >= 0) {
        return newPrice;
      } else {
        alert("Yeterli bakiyeniz yok!");
        return state;
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  headerParam: headerParamReducer,
});

export default rootReducer;

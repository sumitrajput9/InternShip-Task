import { combineReducers, configureStore } from "@reduxjs/toolkit";
import schoolReducer from "../Slice/schoolSlice";
const rootReducer = combineReducers({
  schoolData: schoolReducer, 
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;

import { createSlice } from "@reduxjs/toolkit";

const schoolSlice = createSlice({
  name: "schoolData",
  initialState: {
    siginData: [],
    isLogeddin: false,
    objId:''
  },
  reducers: {
    siginData: (state, action) => {
      state.siginData = action.payload;
    },
    login: (state) => {
      state.isLogeddin = true;
    },
    logOut: (state) => {
      state.isLogeddin = false;
    },
    objId(state,action){
          state.objId=action.payload;
    }
  },
});

export const { login, logOut, siginData,objId} = schoolSlice.actions;
export default schoolSlice.reducer; 

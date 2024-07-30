import { createSlice } from "@reduxjs/toolkit";

export const MainCatogerySlice = createSlice({
    name: "MainCatogery",
    initialState: [],
    reducers: {
        setMainCatogery: (state, action) => {
          console.log("Action=>"+action);
          console.log("State=>"+state);
            state = action.payload;
            return state
        }
    }
})

export const { setMainCatogery } = MainCatogerySlice.actions
export default MainCatogerySlice.reducer
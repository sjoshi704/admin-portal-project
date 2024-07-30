import { createSlice } from "@reduxjs/toolkit";

export const SubCatogerySlice=createSlice({
    name:"SubCatogery",
    initialState:[],
    reducers:{
        setSubCatogery:(state,action)=>{
            state=action.payload
        }
    }
})

export const {setSubCatogery}=SubCatogerySlice.actions
export default SubCatogerySlice.reducer
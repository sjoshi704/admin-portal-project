import { createSlice } from "@reduxjs/toolkit";

export const MainCatogerySlice = createSlice({
    name: "MainCatogery",
    initialState: [
        {
            id: 1,
            name: "Footwear",
            createdAt: new Date().toISOString(),
            description: "A variety of footwear including shoes, sandals, and boots for all occasions."
          },
          {
            id: 2,
            name: "Books",
            createdAt: new Date().toISOString(),
            description: "A collection of books across different genres including fiction, non-fiction, and educational materials."
          },
          {
            id: 3,
            name: "Electronics",
            createdAt: new Date().toISOString(),
            description: "Latest electronics including smartphones, laptops, and home appliances."
          },
          {
            id: 4,
            name: "Clothing",
            createdAt: new Date().toISOString(),
            description: "Fashionable clothing for men, women, and children, suitable for various seasons and occasions."
          }
    ],
    reducers: {
        setMainCatogery: (state, action) => {
            state = action.payload
        }
    }
})

export const { setMainCatogery } = MainCatogerySlice.actions
export default MainCatogerySlice.reducer
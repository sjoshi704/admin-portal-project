import { createSlice } from "@reduxjs/toolkit";

export const SubCatogerySlice=createSlice({
    name:"SubCatogery",
    initialState:[
        {
            id: 1,
            name: "Home Decor",
            categoryId: 101,
            createdAt: new Date().toISOString(),
            description: "A wide range of home decor items including furniture, wall art, and decorative pieces to enhance your living space.",
            imageUrl: "https://images.unsplash.com/photo-1601373860202-8244d90f7cec",
            totalItems: 150
          },
          {
            id: 2,
            name: "Fitness Equipment",
            categoryId: 102,
            createdAt: new Date().toISOString(),
            description: "High-quality fitness equipment such as treadmills, dumbbells, and yoga mats to help you stay in shape.",
            imageUrl: "https://images.unsplash.com/photo-1598133894000-1e55f36b7b34",
            totalItems: 200
          },
          {
            id: 3,
            name: "Kitchen Appliances",
            categoryId: 103,
            createdAt: new Date().toISOString(),
            description: "Essential kitchen appliances including blenders, microwaves, and coffee makers to make cooking easier and more enjoyable.",
            imageUrl: "https://images.unsplash.com/photo-1556912996-4936aee64d12",
            totalItems: 120
          },
          {
            id: 4,
            name: "Gardening Supplies",
            categoryId: 104,
            createdAt: new Date().toISOString(),
            description: "Gardening tools and supplies such as shovels, pots, and seeds to help you create a beautiful garden.",
            imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001b287",
            totalItems: 80
          }
    ],
    reducers:{
        setSubCatogery:(state,action)=>{
            state=action.payload
        }
    }
})

export const {setSubCatogery}=SubCatogerySlice.actions
export default SubCatogerySlice.reducer
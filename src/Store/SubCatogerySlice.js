import { createSlice } from "@reduxjs/toolkit";

export const SubCatogerySlice=createSlice({
    name:"SubCatogery",
    initialState:[
        {
            id: 1,
            name: "Home Decor",
            categoryId: 1,
            createdAt: new Date().toISOString(),
            description: "A wide range of home decor items including furniture, wall art, and decorative pieces to enhance your living space.",
            imageUrl: "http://ghk.h-cdn.co/assets/16/39/dark-walls.jpg",
            totalItems: 150
          },
          {
            id: 2,
            name: "Fitness Equipment",
            categoryId: 2,
            createdAt: new Date().toISOString(),
            description: "High-quality fitness equipment such as treadmills, dumbbells, and yoga mats to help you stay in shape.",
            imageUrl: "https://1.bp.blogspot.com/-pGVRLDzk_iY/UNxIQMjfP7I/AAAAAAAAAKQ/GlVkXDRn6FU/s1600/latest+designed+equipment.jpg",
            totalItems: 200
          },
          {
            id: 3,
            name: "Kitchen Appliances",
            categoryId: 3,
            createdAt: new Date().toISOString(),
            description: "Essential kitchen appliances including blenders, microwaves, and coffee makers to make cooking easier and more enjoyable.",
            imageUrl: "https://mydecorative.com/wp-content/uploads/2020/08/kitchen-appliances.jpg",
            totalItems: 120
          },
          {
            id: 4,
            name: "Gardening Supplies",
            categoryId: 4,
            createdAt: new Date().toISOString(),
            description: "Gardening tools and supplies such as shovels, pots, and seeds to help you create a beautiful garden.",
            imageUrl: "https://simplelivingcountrygal.com/wp-content/uploads/2020/03/garden-tools.jpg",
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
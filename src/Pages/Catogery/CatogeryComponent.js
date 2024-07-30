import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainCatogeryList } from './MainCatogery/MainCatogeryList';
import { SubCatogeryList } from './SubCatogery/SubCatogeryList';
import { CreateMainCatogery } from './MainCatogery/CreateMainCatogery';
import { CreateSubCatogery } from './SubCatogery/CreateSubCatogery';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../../Utilty Variables/APIConstants';
import { setMainCatogery } from '../../Store/MainCatogerySlice';


export function CategoryComponent() {
 const dispatch=useDispatch()

 const getCatogery=()=>{
    axios.get(`${API_BASE_URL}/categories`)
    .then((response)=>{
        const data=response.data;
        dispatch(setMainCatogery(data))
    }).catch((error)=>{
        console.log("There is an error",error)
    })
 }
 useEffect(()=>{
    getCatogery();
 },[])


    return<Routes>
    <Route path='/' element={<Navigate to={"main-categories"} replace={true} />}></Route>
    <Route path="main-categories" element={< MainCatogeryList/>}> </Route>
    <Route path="main-categories/create" element={<CreateMainCatogery  getCatogery={getCatogery} />}> </Route>
    <Route path="sub-categories" element={<SubCatogeryList />}></Route>
    <Route path="sub-categories/create" element={<CreateSubCatogery />}></Route>
</Routes>

}
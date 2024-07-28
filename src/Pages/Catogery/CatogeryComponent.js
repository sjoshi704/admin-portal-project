import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainCatogeryList } from './MainCatogery/MainCatogeryList';
import { SubCatogeryList } from './SubCatogery/SubCatogeryList';
import { CreateMainCatogery } from './MainCatogery/CreateMainCatogery';
import { CreateSubCatogery } from './SubCatogery/CreateSubCatogery';


export function CategoryComponent() {
    return<Routes>
    <Route path='/' element={<Navigate to={"main-categories"} replace={true} />}></Route>
    <Route path="main-categories" element={< MainCatogeryList />}> </Route>
    <Route path="main-categories/create" element={<CreateMainCatogery />}> </Route>
    git 
    <Route path="sub-categories" element={<SubCatogeryList />}></Route>
    <Route path="sub-categories/create" element={<CreateSubCatogery />}></Route>
</Routes>

}
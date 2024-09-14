import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreatePost, HomePage, PageNotFound } from '../pages';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="create" element={<ProtectedRoutes><CreatePost/></ProtectedRoutes>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

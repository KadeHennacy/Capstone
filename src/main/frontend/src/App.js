import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectRoutes } from './hooks/protectedRoutes';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to='home' exact /> } />
      <Route path='/login' element={ <Login /> } />

      <Route element={ <ProtectRoutes /> }>
        <Route path='/home' element={ <Home /> } />
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}
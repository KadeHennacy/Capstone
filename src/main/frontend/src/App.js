import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectRoutes } from './hooks/protectedRoutes';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import { useCookies } from 'react-cookie';

export default function App() {
  const [cookies] = useCookies(['token']);

  return (
    // todo get the email in this class and pass to header as prop, and convert to typescript
    <>
      {cookies.token ? <Header/> : <></>}
      <Routes>
        <Route path='/' element={ <Navigate to='home' exact /> } />
        <Route path='/login' element={ <Login /> } />

        <Route element={ <ProtectRoutes /> }>
          <Route path='/home' element={ <Home /> } />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}
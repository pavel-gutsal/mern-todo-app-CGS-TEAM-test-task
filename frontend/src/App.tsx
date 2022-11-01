import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { BasicLayout } from './pages/BasicLayout/BasicLayout.component';
import { DashBoard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';


export const App = () =>{
  const { user } = useAppSelector(state => state.user);
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route path="/">
          <Route
            index
            element={user ? (<DashBoard />) : (<Navigate to="/signup" replace />)}
          />
          <Route
            path=":filterCriteria"
            element={user ? (<DashBoard />) : (<Navigate to="/signup" replace />)}
          />
        </Route>
        <Route path="/signup" element={!user ? (<Signup/>) : (<Navigate to="/" replace />)} />
        <Route path="/login" element={!user ? (<Login />) : (<Navigate to="/" replace />)} />
      </Route>
    </Routes>
  )
};

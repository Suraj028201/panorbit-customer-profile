import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LendingPage from '../components/lending-page/LendingPage';
import ProfilePage from '../components/profile-page/ProfilePage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<LendingPage />}/>
                <Route path='/profile' element={<ProfilePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
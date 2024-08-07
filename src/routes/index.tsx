import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import PrivateRoute from './private';
import Header from '../components/Header';

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Homepage />
        </>
      }
    />
    <Route path="/login" element={<Login />} />
  </Routes>
);

import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import PrivateRoute from './private';
import Header from '../components/Header';
import Search from '../pages/Search'

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
    <Route path="/search" element={
      <>
        <Header />
        <Search />
      </>
    }
    />
  </Routes>
);

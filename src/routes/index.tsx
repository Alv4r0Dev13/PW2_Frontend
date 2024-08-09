import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import PrivateRoute from './private';
import Header from '../components/Header';
import Search from '../pages/Search'
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';

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
    <Route path="/profile" element={
         <>
          <Header />
      <Profile name={'ana'} email={'ana@gmail.com'} score={0} profilePictureUrl={''}/>
      </>
    }/>
 <Route
      path="/edit-profile"
      element={
        <>
          <Header />
          <EditProfile />
        </>
      }
    />

  </Routes>
);

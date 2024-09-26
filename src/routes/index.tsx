import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import PrivateRoute from './private';
import Header from '../components/Header';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Register from '../pages/Register';
import Comment from '../pages/Comment';
import { useState } from 'react';
import ContactUs from '../pages/Contact';
import Maps from '../pages/Map';
import EditMaps from '../pages/EditMap';

export const AppRoutes = () => {
  const [headerText, setHeaderText] = useState<string>('');

  return (
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
      <Route path="/register" element={<Register />} />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <>
              <Header onInputChange={setHeaderText} />
              <Search searchText={headerText} />
            </>
          </PrivateRoute>
        }
      />
      <Route
        path="/profile/:id"
        element={
          <>
            <Header />
            <Profile />
          </>
        }
      />
      <Route
        path="/map/:id"
        element={
          <>
            <Header />
            <Maps />
          </>
        }
      />
      <Route
        path="/edit-map"
        element={
          <>
            <Header />
            <EditMaps />
          </>
        }
      />
      <Route
        path="/edit-profile"
        element={
          <>
            <Header />
            <EditProfile />
          </>
        }
      />
      <Route
        path="/post/:id"
        element={
          <>
            <Header />
            <Comment />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <ContactUs />
          </>
        }
      />
    </Routes>
  );
};

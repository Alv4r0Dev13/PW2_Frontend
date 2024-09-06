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
import { useEffect, useState } from 'react';

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
        path="/profile"
        element={
          <>
            <Header />
            <Profile
              name={'ana'}
              email={'ana@gmail.com'}
              score={0}
              profilePictureUrl={''}
            />
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
    </Routes>
  );
};

import {
  Route,
  Routes,
} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import PrivateRoute from './private';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<PrivateRoute><Homepage /></PrivateRoute>} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

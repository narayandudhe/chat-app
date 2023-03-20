import { redirect, Route, Routes } from 'react-router';

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = true;
  if (!profile) {
    return redirect('/signin');
  }
  return children;
};

export default PrivateRoute;

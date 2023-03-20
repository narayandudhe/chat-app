import { redirect } from 'react-router';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = true;
  if (profile) {
    redirect('/');
  }
  return children;
};

export default PublicRoute;

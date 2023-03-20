import { redirect } from 'react-router';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children }) => {
  const profile = useProfile();
  if (profile) {
    redirect('/');
  }
  return children;
};

export default PublicRoute;

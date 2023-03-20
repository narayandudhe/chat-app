import { redirect } from 'react-router';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children }) => {
  const profile = useProfile();
  if (!profile) {
    return redirect('/signin');
  }
  return children;
};

export default PrivateRoute;

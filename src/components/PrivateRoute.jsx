import { useNavigate } from 'react-router-dom';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const { profile, isLoading } = useProfile();

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" speed="slow" content="Loading" />
      </Container>
    );
  }
  if (!profile && !isLoading) {
    return navigate('/signin');
  }
  return children;
};

export default PrivateRoute;

import { redirect } from 'react-router';
import { Container, Loader } from 'rsuite';

import { useProfile } from '../context/profile.context';

const PublicRoute = ({ children }) => {
  const { profile, isLoading } = useProfile();
  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical size="md" speed="slow" content="Loading" />
      </Container>
    );
  }
  if (profile && !isLoading) {
    redirect('/');
  }
  return children;
};

export default PublicRoute;

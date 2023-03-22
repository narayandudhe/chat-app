import { Button, Drawer } from 'rsuite';
import { useProfile } from '../../context/profile.context';

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
        <Drawer.Actions bottom="true">
          <Button block appearance="primary" onClick={onSignOut} color="red">
            SignOut
          </Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
      </Drawer.Body>
    </>
  );
};

export default Dashboard;

import { Button, Drawer } from 'rsuite';
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useModelState } from '../../misc/custom-hooks';
import Dashboard from '.';
const DashboardToggle = () => {
  const { isOpen, open, close } = useModelState();

  return (
    <>
      <Button block appearance="primary" color="blue" onClick={open}>
        <DashboardIcon />
        Dashboard
      </Button>
      <Drawer open={isOpen} onClose={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;

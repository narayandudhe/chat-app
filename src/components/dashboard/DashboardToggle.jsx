import { Button, Drawer } from 'rsuite';
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useMediaQuery, useModelState } from '../../misc/custom-hooks';
import Dashboard from '.';
const DashboardToggle = () => {
  const { isOpen, open, close } = useModelState();
  const isMobile = useMediaQuery('(max-width:992px)');
  return (
    <>
      <Button block appearance="primary" color="blue" onClick={open}>
        <DashboardIcon />
        Dashboard
      </Button>
      <Drawer full={isMobile} open={isOpen} onClose={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
};

export default DashboardToggle;

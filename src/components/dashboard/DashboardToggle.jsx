import { Button, Drawer, useToaster, Message } from 'rsuite';
import { useCallback } from 'react';
import DashboardIcon from '@rsuite/icons/Dashboard';
import { useMediaQuery, useModelState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { auth } from '../../misc/firebase';

const DashboardToggle = () => {
  const { isOpen, open, close } = useModelState();
  const isMobile = useMediaQuery('(max-width:992px)');
  const toaster = useToaster();
  const Alert = (type, message) => {
    toaster.push(<Message type={type}>{message}</Message>, {
      duration: 4000,
    });
  };
  const onSignOut = useCallback(() => {
    auth.signOut();
    Alert('info', 'Signed Out');
    close();
  }, [close]);
  return (
    <>
      <Button block appearance="primary" color="blue" onClick={open}>
        <DashboardIcon />
        Dashboard
      </Button>
      <Drawer
        size={isMobile ? 'xs' : 'sm'}
        open={isOpen}
        onClose={close}
        placement="left"
      >
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </>
  );
};

export default DashboardToggle;

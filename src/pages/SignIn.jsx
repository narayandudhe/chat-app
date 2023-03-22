import firebase from 'firebase/compat/app';
import {useToaster,Message, Button, Col, Container, Grid, Panel, Row } from 'rsuite';
import FacebookOfficialIcon from '@rsuite/icons/legacy/FacebookOfficial';
import GooglePlusCircleIcon from '@rsuite/icons/legacy/GooglePlusCircle';
import { auth, database } from '../misc/firebase';

const SignIn = () => {
  const toaster = useToaster();
  const Alert = (type, message) => {
    toaster.push(<Message type={type}>{message}</Message>, {
      duration: 4000,
    });
  };
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert('success', 'Logged in');
    } catch (error) {
      Alert('info', error.message);
    }
  };

  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat App</h2>
                <p>Progressive Chat Platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button
                  block
                  appearance="primary"
                  color="blue"
                  onClick={onFacebookSignIn}
                >
                  <FacebookOfficialIcon /> Contine with Facebook
                </Button>
                <Button
                  block
                  appearance="primary"
                  color="green"
                  onClick={onGoogleSignIn}
                >
                  <GooglePlusCircleIcon /> Contine with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;

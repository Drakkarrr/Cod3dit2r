import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';

const SignIn: React.FC = () => {
  const styles = useStyles();

  const { loginWithRedirect } = useAuth0();
  const onLogIn = () => {
    loginWithRedirect();
  };

  return (
    <Button className={styles.button} onClick={onLogIn}>
      Sign In
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
  },
}));

export default SignIn;

import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { defaultColors } from 'theme/colors';

const SignOut = () => {
  const { logout } = useAuth0();
  const styles = useStyles();
  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <Button className={styles.button} onClick={onSignOut}>
      Sign Out
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: defaultColors.font,
  },
}));

export default SignOut;

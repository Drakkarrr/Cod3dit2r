import React from 'react';
import { makeStyles } from '@material-ui/core';
import SignOut from 'auth/SignOut';

const Authenticated = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className="workspace">Open Workspace</div>
      <SignOut />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default Authenticated;

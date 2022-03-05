import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleDarkMode } from '../../../store/dark-mode/reducer';
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const darkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          CodEdit2r Appppp
        </Typography>
        <Switch onChange={darkModeHandler} color="default" checked={darkMode} />
        {isAuthenticated ? <div>Autenticated button</div> : <div>UnAutenticated button</div>}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}));

export default Header;

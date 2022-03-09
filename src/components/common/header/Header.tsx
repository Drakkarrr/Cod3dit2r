import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { toggleDarkMode } from '../../../store/dark-mode/reducer';
import { AppBar, makeStyles, Switch, Toolbar, Typography } from '@material-ui/core';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import UnAuthenticated from './UnAuthenticated';
import Authenticated from './Authenticated';

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
          CodEdit2r
        </Typography>
        <DarkModeOutlinedIcon />
        <LightModeOutlinedIcon />
        <Switch onChange={darkModeHandler} color="default" checked={darkMode} />
        {isAuthenticated ? <Authenticated /> : <UnAuthenticated />}
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

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({}));

const Header = () => {
  const classes = useStyles();

  return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Deezer
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>)
};

export default Header
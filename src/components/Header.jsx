import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#222b45',
  },
  title: {
    flexGrow: 1,
    fontSize: '1rem',

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          COVID-19 Emergency Appeal
        </Typography>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href="#supportNow"
        >
          Support
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

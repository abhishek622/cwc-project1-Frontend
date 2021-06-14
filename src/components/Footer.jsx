import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(3),
    backgroundColor: '#222b45',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root} square>
      <Typography variant="subtitle1" style={{ color: '#999da4' }}>
        Building a future in which humans live in harmony with nature.
      </Typography>
      <div>
        <Typography variant="caption">&#xA9; Abhishek Prasad</Typography>
      </div>
    </Paper>
  );
}

export default Footer;

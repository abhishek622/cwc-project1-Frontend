import React from 'react';
import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import world from '../images/world.svg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: '#1a2138',
    paddingTop: theme.spacing(2),
  },
  txtbox: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    alignSelf: 'center',
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
    },
  },
  head: {
    marginBottom: theme.spacing(3),
  },
  para: {
    color: '#999da4',
    marginBottom: theme.spacing(3),
  },
  media: {
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
    height: 500,
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6} className={classes.txtbox}>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            className={classes.head}
          >
            Your Support For Communities
          </Typography>
          <Typography variant="body1" className={classes.para}>
            Thank you for your interest in supporting communities - fishermen,
            farmers and others who live around protected natural areas and are
            key stakeholders in conserving our forests, rivers and oceans. Loss
            of livelihood due to COVID-19 has put families in immense hardship.
            Your support will provide them with food supplies, hygiene and
            safety kits.
          </Typography>
          <Button
            href="#supportNow"
            variant="contained"
            color="primary"
            size="large"
          >
            SUPPORT
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardMedia className={classes.media} image={world} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Hero;

import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import StorageIcon from '@material-ui/icons/Storage';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#1a2138',
  },
  media: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 310,
      marginBottom: theme.spacing(1),
    },
    maxHeight: 360,
  },
  head: {
    color: '#eeeeef',
    margin: theme.spacing(2),
    fontWeight: 600,
  },
  item2: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  para: {
    color: '#999da4',
    marginBottom: theme.spacing(3),
  },
  subSec: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  subItem: {
    padding: theme.spacing(1),
    '& .MuiTypography-root': {
      color: '#000000',
    },
    width: 140,
  },
}));

const img1 =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Fp-VnBYFpZwodxw49W2cnH85A0yzC7kPWBswwwWQEdw8.jpg%3Fauto%3Dwebp%26s%3De3e19ecd7e74b1ff0b482dd4b1f9d824492df764&f=1&nofb=1';

function Section3() {
  const classes = useStyles();

  return (
    <Paper id="payment" elevation={0} className={classes.root} square>
      <Grid container>
        <Grid item sm={12} md={6} align="center">
          <img src={img1} className={classes.media} alt="" />
        </Grid>
        <Grid item sm={12} md={6} className={classes.item2}>
          <Typography gutterBottom variant="h4" component="h4">
            Welcome to Kindity
          </Typography>
          <Typography variant="body1" className={classes.para} gutterBottom>
            Inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why it’s crucial that, we always help each other and people
            in need to make our society a better place.
          </Typography>
          <div className={classes.subSec}>
            <Paper elevation={3} align="left" className={classes.subItem}>
              <StorageIcon fontSize="large" />
              <Typography component="h5" variant="h5">
                &#8377; &nbsp;2.5Cr
              </Typography>
              <Typography variant="subtitle1">Total Donation</Typography>
            </Paper>

            <Paper elevation={3} align="left" className={classes.subItem}>
              <GroupIcon fontSize="large" />
              <Typography component="h5" variant="h5">
                628
              </Typography>
              <Typography variant="subtitle1">Total Volunteers</Typography>
            </Paper>

            <Paper elevation={3} align="left" className={classes.subItem}>
              <AssignmentIcon fontSize="large" />
              <Typography component="h5" variant="h5">
                118
              </Typography>
              <Typography variant="subtitle1">Total Projects</Typography>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Section3;

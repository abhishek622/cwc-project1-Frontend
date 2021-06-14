import { makeStyles } from '@material-ui/core';
import React from 'react';
// import paypal from '../images/paypal.svg';
import PayWithPaypal from './PayWithPaypal';
import PayWithInstamojo from './PayWithInstamojo';
import PayWithRazorpay from './PayWithRazorpay';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  btnGroup: {
    backgroundColor: '#fff',
    ' & img': {
      maxHeight: '1.8rem',
      padding: '0px 20px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
}));

function Payment() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PayWithPaypal />
      <PayWithInstamojo className={classes.btnGroup} />
      <PayWithRazorpay className={classes.btnGroup} />
    </div>
  );
}

export default Payment;

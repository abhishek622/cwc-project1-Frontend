import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#222b45',
    padding: theme.spacing(3),
    gap: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  cardi: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
}));

const arr = [
  {
    id: 1,
    num: '\u20B9\u00a02.5Cr',
    label: 'TOTAL DONATION',
    def: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    colorx: '#e7c12d',
  },
  {
    id: 2,
    num: '\u00a0\u00a0628\u00a0\u00a0',
    label: 'TOTAL VOLUNTEERS',
    def: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    colorx: '#dc3545',
  },
  {
    id: 3,
    num: '\u00a0\u00a0118\u00a0\u00a0',
    label: 'TOTAL PROJECTS',
    def: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    colorx: '#28a745',
  },
];

function Details() {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root} square>
      {arr.map(items => (
        <Card
          className={classes.cardi}
          style={{ backgroundColor: `${items.colorx}` }}
          key={items.id}
        >
          <CardContent>
            <Typography
              component="h5"
              variant="h5"
              gutterBottom
              style={{ color: 'black' }}
            >
              {items.label}
            </Typography>
            <Typography variant="body1">{items.def}</Typography>
          </CardContent>
          <Divider orientation="vertical" flexItem />
          <CardContent
            className={classes.right}
            style={{ alignSelf: 'center' }}
          >
            <Typography variant="h6" align="center">
              {items.num}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
}

export default Details;

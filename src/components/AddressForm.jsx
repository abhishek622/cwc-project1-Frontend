import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from '@material-ui/core';
import Payment from './Payment';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    '& .MuiInputLabel-root': {
      color: '#999da4',
    },
    '& .Mui-focused, .MuiInputBase-input:focus': {
      color: '#1976d2',
    },
    '& .MuiInputBase-input': {
      color: '#ffffff',
    },
  },
  bg: {
    padding: theme.spacing(3),
    backgroundColor: '#222b45',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  menuPaper: {
    '& .MuiInputBase-input:focus': {
      color: '#000000',
      //   maxHeight: 100,
      padding: theme.spacing(1),
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: '#1a2138',
      color: '#ffffff',
    },
  },
};

const states = [
  {
    id: 1,
    label: 'Andhra Pradesh',
  },
  {
    id: 2,
    label: 'Arunachal Pradesh',
  },
  {
    id: 3,
    label: 'Assam',
  },
  {
    id: 4,
    label: 'Bihar',
  },
  {
    id: 5,
    label: 'Chhattisgarh',
  },
  {
    id: 6,
    label: 'Goa',
  },
  {
    id: 7,
    label: 'Gujarat',
  },
  {
    id: 8,
    label: 'Haryana',
  },
  {
    id: 9,
    label: 'Himachal Pradesh',
  },
  {
    id: 10,
    label: 'Jharkhand',
  },
  {
    id: 11,
    label: 'Karnataka',
  },
  {
    id: 12,
    label: 'Kerala',
  },
  {
    id: 13,
    label: 'Madhya Pradesh',
  },
  {
    id: 14,
    label: 'Maharashtra',
  },
  {
    id: 15,
    label: 'Manipur',
  },
  {
    id: 16,
    label: 'Meghalaya',
  },
  {
    id: 17,
    label: 'Mizoram',
  },
  {
    id: 18,
    label: 'Nagaland',
  },
  {
    id: 19,
    label: 'Odisha',
  },
  {
    id: 20,
    label: 'Punjab',
  },
  {
    id: 21,
    label: 'Rajasthan',
  },
  {
    id: 22,
    label: 'Sikkim',
  },
  {
    id: 23,
    label: 'Tamil Nadu',
  },
  {
    id: 24,
    label: 'Telangana',
  },
  {
    id: 25,
    label: 'Tripura',
  },
  {
    id: 26,
    label: 'Uttar Pradesh',
  },
  {
    id: 27,
    label: 'Uttarakhand',
  },
  {
    id: 28,
    label: 'West Bengal',
  },
];

export default function AddressForm() {
  const classes = useStyles();
  const [stateName, setStateName] = useState('');
  const [option, setOption] = useState();
  const handleChange = event => {
    setStateName(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOption(<Payment />);
  };

  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit} id="supportNow">
        <Typography variant="h4" align="center" gutterBottom>
          Support Now
        </Typography>
        <Paper elevation={3} className={classes.bg}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="select-label">State</InputLabel>
                <Select
                  id="select"
                  value={stateName}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  <MenuItem aria-label="None" value="" />
                  {states.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Pin code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
      {option}
    </>
  );
}

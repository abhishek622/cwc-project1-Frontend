import React from 'react';
import Header from '../components/Header';
import './App.css';
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from '@material-ui/core';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Footer from '../components/Footer';
import Section3 from '../components/Section3';
import Review from '../components/Review';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AddressForm from '../components/AddressForm';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#fff',
    },
    secondary: {
      main: '#222b45',
    },
    background: {
      default: '#1a2138',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
    MuiTypography: {
      root: {
        color: '#fff',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar />
      <Hero />
      <Details />
      <Section3 />
      <Review />
      <AddressForm />
      <Footer />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;

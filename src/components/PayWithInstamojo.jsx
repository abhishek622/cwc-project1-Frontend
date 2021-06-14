import React from 'react';
import { Button } from '@material-ui/core';

// import C_logo from '../images/C_logo.png';

function PayWithInstamojo({ className }) {
  const script = document.createElement('script');

  script.src = 'https://js.instamojo.com/v1/checkout.js';
  script.async = true;

  document.body.appendChild(script);

  return (
    <Button
      variant="contained"
      size="small"
      href="https://test.instamojo.com/@abhishek628p/"
      target="_blank"
      className={className}
    >
      <img
        src="https://static.im-cdn.com/assets/images/logo.d8e416049537.jpg"
        alt="Instamojo"
      />
    </Button>
  );
}

export default PayWithInstamojo;

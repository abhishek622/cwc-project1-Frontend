import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

import C_logo from '../images/C_logo.png';
import razorpay from '../images/razorpay.svg';

function PayWithRazorpay({ className }) {
  function loadScript(src) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await axios.post(`${process.env.REACT_APP_BACKEND}/orders`);

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.REACT_APP_DATA_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'COVID-19 Emergency Appeal',
      description: 'Test Transaction',
      image: { C_logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND}/success`,
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: 'Soumya Dey',
        email: 'SoumyaDey@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Button
      variant="contained"
      size="small"
      onClick={displayRazorpay}
      className={className}
    >
      <img src={razorpay} alt="Razorpay" />
    </Button>
  );
}

export default PayWithRazorpay;

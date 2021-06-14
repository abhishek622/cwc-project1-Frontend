import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';

const initialOptions = {
  'client-id': process.env.REACT_APP_PAYPAL,
  currency: 'INR',
  intent: 'capture',
};

export default function PayWithPaypal() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{
          layout: 'horizontal',
          height: 50,
          color: 'white',
        }}
      />
    </PayPalScriptProvider>
  );
}

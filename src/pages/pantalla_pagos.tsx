import React, { useState } from 'react';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentPage = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'expiry':
        setExpiry(value);
        break;
      case 'cvc':
        setCvc(value);
        break;
      default:
        break;
    }
  };

  const handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  return (
    <div className="payment-form">
      <div className="credit-card">
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>
      <form>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Card Number"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Cardholder Name"
        />
        <input
          type="tel"
          name="expiry"
          value={expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Expiration Date (MM/YY)"
        />
        <input
          type="tel"
          name="cvc"
          value={cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="CVC"
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;
import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey  = "pk_test_51Iv0TcGH1c8xozdg6qCovb36BbGVnBpKF6iBnh9LGb5k2nQn7EDorDg9rLa3h74XafUoHmIpm4ynf1np0ifhC52w003a2bp28W";
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    };
    return (
        <StripeCheckOut 
        label='Pay Now'
        name='CRWN clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/en/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeButton;
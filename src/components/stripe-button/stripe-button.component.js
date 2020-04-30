import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutbutton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_xSgoLMLDpMk2ioSoBgZKfmPe0074Zanlde';

    const onToken = token => {
        console.log('token', token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Kitlocker ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutbutton;
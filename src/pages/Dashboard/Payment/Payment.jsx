import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData, useParams } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)
const Payment = () => {
    const cart = useLoaderData();
    const price = cart.price;
    return (
        <div>
            <h1 className='text-center text-3xl m-10'>Please Make Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}>

                </CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
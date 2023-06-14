import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import './CheckoutForm.css'
import { AuthContext } from "../../../providers/AuthProvider";


const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        setLoading(true); // Set loading to true when payment process starts

        if (!stripe || !elements) {
            return;
        }
     let   email =user.email
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setProcessing(false)
            setLoading(false); // Set loading to false when there is an error
            console.log('Error:', error);
        } else {
            console.log('Payment Method:', paymentMethod);

            try {
                const response = await fetch('https://bangali-ranna.vercel.app/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        paymentMethodId: paymentMethod.id,
                        amount: price,
                    }),
                });

                if (response.ok) {
                    setProcessing(false)
                    fetch(`https://bangali-ranna.vercel.app/enroll/${cart._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email,}),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            setLoading(false);
                            setSuccessMessage('Cart selected successfully!');
                        })
                        .catch((error) => console.log('Error:', error));

                        setLoading(false);

                    setSuccessMessage('Payment successful!');
                } else {
                    setProcessing(false)
                    setLoading(false); // Set loading to false when payment fails

                    setSuccessMessage('Payment failed. Please try again.');
                }
            } catch (error) {
                setProcessing(false)
                setLoading(false); // Set loading to false when there is an error

                console.log('Error:', error);
                setSuccessMessage('An error occurred while processing the payment. Please try again.');
            }
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement />
                    <button type="submit" disabled={!stripe}>
                        {loading ? 'Loading...' : 'Pay'} {/* Update the button text based on the loading state */}
                    </button>
                </form>
                {successMessage && <p>{successMessage}</p>}
            </div>
        </>
    );
};

export default CheckoutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from "react";

const ChackoutForm = () => {
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId,setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth() || {};
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if(total > 0){
          axiosSecure.post('/create-payment-intent', { price: total })
          .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
          })
        }
        
      }, [axiosSecure, total])

    const handleSubmit = async (event) => {
        
        event.preventDefault();
    
        if (!stripe || !elements) {
        
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
        }
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default ChackoutForm;
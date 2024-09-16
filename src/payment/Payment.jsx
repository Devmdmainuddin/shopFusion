import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackoutForm from './ChackoutForm'

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
    //  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return (
        <div className='w-[300px]'>
            <h2>payment page</h2>

            <Elements stripe={stripePromise}>
                <ChackoutForm />
            </Elements>
        </div>
    )

}

export default Payment;
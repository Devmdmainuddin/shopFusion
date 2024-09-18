import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteCheckout } from "../redux/posts/postsSlice";
import { clearCart } from "../redux/state/cartSlice";

const ChackoutForm = ({total,id}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState()
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth() || {};
  const axiosSecure = useAxiosSecure()


  

  useEffect(() => {
    if (total > 0) {
      axiosSecure.post('/create-payment-intent', { price: total })
        .then(res => {
          console.log("Client Secret:", res.data.clientSecret); 
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => console.error("Error creating payment intent:", error.response?.data || error.message || error));
    }
  }, [axiosSecure, total]);


  const handleSubmit = async (event) => {

    event.preventDefault();
    if (!clientSecret) {
      console.error("Client Secret is missing!");
      return;
    }
    if (!stripe || !elements) {

      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
    } else {
      console.log('paymentMethod', paymentMethod);
      setError('')
    }
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });
    
    console.log("Payment Intent:", paymentIntent); // Debugging
    if (confirmError) {
      console.error("Confirm Error:", confirmError); // Debugging
      return;
    } else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: total,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: id,
          //   cartIds:carts.map(item => item._id),
          //   menuItemIds:carts.map(item =>item.menuId), 
          status: 'panding'

        }
        const res = await axiosSecure.post('/payments', payment)


        // refetch()
        if (res.data?.result?.insertedId) {
          dispatch(deleteCheckout(id));
          dispatch(clearCart());
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment successfuly",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }
  }
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
        <button type="submit" className="mt-6 mx-auto block  py-2 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out" >
          Pay
        </button>
        <p className="text-red-500">{error}</p>
      </form>
    </div>
  );
}
export default ChackoutForm;


import useAxiosCommon from "./useAxiosCommon";
// import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCartItems = () => {
    const axiosCommon =useAxiosCommon();
    const { data: cartItems = [], isPending:loading, refetch } = useQuery({
        queryKey: ['cartItems'],
        queryFn: async() => {
          const { data } = await axiosCommon.get(`/cart`)
          return data
        },
      })
   
      const cartTotal = cartItems.reduce((acc,items)=> acc + parseInt(items.price),0)
      console.log(cartTotal);
   
      return [cartItems,loading,refetch,cartTotal]

    // ..............................

   




};

export default useCartItems;


import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";
// import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCartItems = () => {
  const {user}=useAuth();
    const axiosCommon =useAxiosCommon();
    const { data: cartItems = [], isPending:loading, refetch:refash } = useQuery({
        queryKey: ['cartItems'],
        queryFn: async() => {
          const { data } = await axiosCommon.get(`/cart/${user.email}`)
          return data
        },
      })
   
      const cartTotal = cartItems.reduce((acc,items)=> acc + parseInt(items.price),0)
      // console.log(cartTotal);
   
      return [cartItems,loading,refash,cartTotal]

    // ..............................

   




};

export default useCartItems;
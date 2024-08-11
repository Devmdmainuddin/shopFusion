

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
      return [cartItems,loading,refetch]

    // ..............................

   




};

export default useCartItems;
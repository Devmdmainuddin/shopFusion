import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";


const useWishlist = () => {
    const axiosCommon =useAxiosCommon();
    const { data: wishlist = [], isPending:loading, refetch:refash } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async() => {
          const { data } = await axiosCommon.get(`/wishlist`)
          return data
        },
      })
   
      // const wishlistTotal = wishlist.reduce((acc,items)=> acc + parseInt(items.price),0)
      // console.log(wishlistTotal);
   
      return [wishlist,loading,refash]

    // ..............................
};

export default useWishlist;
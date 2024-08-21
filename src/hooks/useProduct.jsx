
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useProduct = () => {
  const axiosSecure = useAxiosSecure()
  const { data: product = [], isPending: loading, refetch } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/products`)
      return data
    },
  })

  
  // const cartTotal = product.reduce((acc,items)=> acc + parseInt(items.price),0)
  return [product, loading, refetch, ]
};

export default useProduct;
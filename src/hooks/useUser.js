
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isPending: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users`)
            return data
        },
    })


    // const cartTotal = product.reduce((acc,items)=> acc + parseInt(items.price),0)
    return [users, loading, refetch,]
};

export default useUser;
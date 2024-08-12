import useAxiosCommon from "./useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
const useComment = () => {
    const axiosCommon =useAxiosCommon();
    const { data: comment = [], isPending:loading, refetch } = useQuery({
        queryKey: ['comment'],
        queryFn: async() => {
          const { data } = await axiosCommon.get(`/comment`)
          return data
        },
      })
      return [comment,loading,refetch]
};

export default useComment;
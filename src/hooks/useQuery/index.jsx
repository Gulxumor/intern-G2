import useAxios from "../useAxios/index";
import { useQuery } from "react-query";
export const useQueryHandler = ({
  queryKey,
  queryLink,
  method = "GET",
  body,
}) => {
  const axios = useAxios();
  return useQuery(
    queryKey,
    () => axios({ url: queryLink, method, body }).then((res) => res.data.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );
};

import axios from "../useAxios/index";
import { useQuery } from "react-query";
export const useQueryHandler = ({
  queryKey,
  queryLink,
  method = "GET",
  body,
}) => {
  return useQuery(queryKey, () => axios({ url: queryLink, method, body }), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

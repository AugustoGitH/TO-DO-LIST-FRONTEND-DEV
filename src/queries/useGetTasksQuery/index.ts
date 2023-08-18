import { type UseQueryResult, useQuery } from "react-query";
import { api } from "../../services/axios/settings";

import { IFetchTasksResponse } from "./types";

const fetchTasks = async (): Promise<IFetchTasksResponse> => {
  const { data } = await api.get<IFetchTasksResponse>("/task");
  return data;
};

const useGetTasksQuery = (): UseQueryResult<IFetchTasksResponse> => {
  return useQuery(["tasks"], fetchTasks, {
    staleTime: 1000 * 60, // 1 minuto
    refetchOnWindowFocus: "always",
  });
};

export default useGetTasksQuery;

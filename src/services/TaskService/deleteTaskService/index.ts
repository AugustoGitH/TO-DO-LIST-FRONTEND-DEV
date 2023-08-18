import { AxiosError } from "axios";
import { api } from "../../axios/settings";

import { IDeleteTaskService, IDeleteTaskServiceResponse } from "./types";

const deleteTaskService = async (id: string): Promise<IDeleteTaskService> => {
  try {
    const {
      data: { idTaskDeleted },
      status,
    } = await api.delete<IDeleteTaskServiceResponse>(`/task/${id}`);
    console.log(idTaskDeleted);
    return {
      success: true,
      idTaskDeleted,
      status,
    };
  } catch (error) {
    return {
      success: true,
      idTaskDeleted: null,
      status: error instanceof AxiosError ? error.status || 500 : 500,
    };
  }
};

export default deleteTaskService;

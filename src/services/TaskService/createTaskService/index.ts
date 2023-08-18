import { AxiosError } from "axios";
import { api } from "../../axios/settings";

import { ICreateTaskService, ICreateTaskServiceResponse } from "./types";

const createTaskService = async (name: string): Promise<ICreateTaskService> => {
  try {
    const {
      data: { taskCreated },
      status,
    } = await api.post<ICreateTaskServiceResponse>("/task", { name });
    return {
      success: true,
      taskCreated,
      status,
    };
  } catch (error) {
    return {
      success: true,
      taskCreated: null,
      status: error instanceof AxiosError ? error.response?.status || 500 : 500,
    };
  }
};

export default createTaskService;

import { AxiosError } from "axios";
import { api } from "../../axios/settings";
import {
  IUpdateTaskService,
  IUpdateTaskResponse,
  IFieldsTaskUpdated,
} from "./types";

const updateTaskService = async (
  { name, wasFinished }: IFieldsTaskUpdated,
  id: string
): Promise<IUpdateTaskService> => {
  try {
    const queriesFields = Object.entries({ id, name, wasFinished })
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const {
      data: { idTaskUpdated },
      status,
    } = await api.put<IUpdateTaskResponse>(`/task?${queriesFields}`);
    return {
      success: true,
      idTaskUpdated,
      status,
    };
  } catch (error) {
    return {
      success: true,
      idTaskUpdated: null,
      status: error instanceof AxiosError ? error.response?.status || 500 : 500,
    };
  }
};

export default updateTaskService;

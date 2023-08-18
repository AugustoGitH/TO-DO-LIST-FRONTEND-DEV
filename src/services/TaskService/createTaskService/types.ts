import { ITask } from "../../../types/ITask";

export interface ICreateTaskService {
  success: boolean;
  taskCreated: ITask | null;
  status: number;
}

export interface ICreateTaskServiceResponse {
  message: string;
  taskCreated: ITask | null;
}

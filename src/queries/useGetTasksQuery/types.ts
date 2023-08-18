import { ITask } from "../../types/ITask";

export interface IFetchTasksResponse {
  message: string;
  tasks: ITask[];
}

export interface IDeleteTaskService {
  success: boolean;
  idTaskDeleted: string | null;
  status: number;
}

export interface IDeleteTaskServiceResponse {
  message: string;
  idTaskDeleted: string | null;
}

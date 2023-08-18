export interface IUpdateTaskService {
  success: boolean;
  idTaskUpdated: string | null;
  status: number;
}

export interface IUpdateTaskResponse {
  message: string;
  idTaskUpdated: string | null;
}

export interface IFieldsTaskUpdated {
  name?: string;
  wasFinished?: boolean;
}

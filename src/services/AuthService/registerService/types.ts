export interface IRegisterServiceResponse {
  message: string | string[];
  error: string;
  statusCode: number;
}

export interface IRegisterService {
  success: boolean;
  message: string;
}

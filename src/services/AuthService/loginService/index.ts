import { AxiosError } from "axios";
import { IFormLogin } from "../../../schemas/loginSchema/types";
import { api } from "../../axios/settings";
import { ILoginService, ILoginServiceResponse } from "./types";
import { messageErrorsLoginService } from "./constants";

const loginService = async (loginForm: IFormLogin): Promise<ILoginService> => {
  try {
    const {
      data: { message },
    } = await api.post<ILoginServiceResponse>("/auth/login", loginForm);
    return {
      message: typeof message === "string" ? message : message[0],
      success: true,
    };
  } catch (error) {
    return {
      message:
        error instanceof AxiosError
          ? error.response?.data?.message ??
            messageErrorsLoginService.GENERIC_ERROR
          : messageErrorsLoginService.GENERIC_ERROR,
      success: false,
    };
  }
};

export default loginService;

import { AxiosError } from "axios";

import { api } from "../../axios/settings";
import { IRegisterService, IRegisterServiceResponse } from "./types";
import { messageErrorsRegisterService } from "./constants";
import { IFormRegister } from "../../../schemas/registerSchema/types";

const registerService = async (
  registerForm: IFormRegister
): Promise<IRegisterService> => {
  try {
    const {
      data: { message },
    } = await api.post<IRegisterServiceResponse>(
      "/auth/register",
      registerForm
    );
    return {
      message: typeof message === "string" ? message : message[0],
      success: true,
    };
  } catch (error) {
    return {
      message:
        error instanceof AxiosError
          ? error.response?.data?.message ??
            messageErrorsRegisterService.GENERIC_ERROR
          : messageErrorsRegisterService.GENERIC_ERROR,
      success: false,
    };
  }
};

export default registerService;

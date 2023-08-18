import { useForm } from "react-hook-form"
import * as S from "./styles"
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from "../../schemas/registerSchema";
import { loginSchema } from "../../schemas/loginSchema";
import { IFormRegister } from "../../schemas/registerSchema/types";
import { IFormLogin } from "../../schemas/loginSchema/types";
import { AuthService } from "../../services/AuthService";
import AlertInBox from "./AlertInBox";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";

const icons = {
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>'
}

interface IStatusAlert {
  show: boolean,
  loading: boolean,
  onOk?: () => void,
  message?: string
}

interface ICardAuthentication {
  show: boolean,
  onClose?: () => void
}

const CardAuthentication = ({ show, onClose }: ICardAuthentication): JSX.Element => {
  const { reset: resetRegister, register: registerRegister, formState: { errors: errorsRegister }, handleSubmit: handleSubmitRegister } = useForm<IFormRegister>({
    resolver: zodResolver(registerSchema),

  })

  const { reset: resetLogin, register: registerLogin, formState: { errors: errorsLogin }, handleSubmit: handleSubmitLogin } = useForm<IFormLogin>({
    resolver: zodResolver(loginSchema)
  })

  const [statusLoginAlert, setStatusLoginAlert] = useState<IStatusAlert>({
    show: false,
    loading: false,
    onOk: undefined,
    message: undefined
  })
  const [statusRegisterAlert, setStatusRegisterAlert] = useState<IStatusAlert>({
    show: false,
    loading: false,
    onOk: undefined,
    message: undefined
  })


  const handleRegister = async (data: IFormRegister) => {
    setStatusRegisterAlert(prevStatus => ({ ...prevStatus, show: true, loading: true }))
    const { message, success } = await AuthService.register(data)
    setStatusRegisterAlert(prevStatus => ({
      ...prevStatus, message, loading: false, onOk: () => {
        setStatusRegisterAlert(prevStatus => ({ ...prevStatus, show: false }))
      }
    }))
    if (success) {
      resetRegister()
    }
  }
  const handleLogin = async (data: IFormLogin) => {
    setStatusLoginAlert(prevStatus => ({ ...prevStatus, show: true, loading: true }))
    const { message, success } = await AuthService.login(data)
    if (success) {
      resetLogin()

    }

    setStatusLoginAlert(prevStatus => ({
      ...prevStatus, message, loading: false, onOk: () => {
        if (onClose) {
          queryClient.invalidateQueries(["tasks"])
          onClose()

        }
      }
    }))
  }

  return show ? (
    <S.CardAuthentication>
      <div className="card">
        <button className="btn-close" onClick={onClose} dangerouslySetInnerHTML={{ __html: icons.x }} />
        <h1>Faça seu login ou registro para ter acesso a sua To-do-List </h1>
        <form onSubmit={handleSubmitRegister(handleRegister)}>
          <h3>Registre-se</h3>
          <div className="input">
            <input placeholder="Nome" {...registerRegister("name")} />
            {errorsRegister?.name && (<span className="helper-text">{errorsRegister?.name?.message}</span>)}
          </div>
          <div className="input">
            <input placeholder="Email" {...registerRegister("email")} />
            {errorsRegister?.email && (<span className="helper-text">{errorsRegister?.email?.message}</span>)}
          </div>
          <div className="input">
            <input type="password" placeholder="Password" {...registerRegister("password")} />
            {errorsRegister?.password && (<span className="helper-text">{errorsRegister?.password?.message}</span>)}
          </div>
          <button className="btn-form">Registrar</button>
          <AlertInBox show={statusRegisterAlert.show} loading={statusRegisterAlert.loading} helperCard={{
            text: statusRegisterAlert.message,
            onOk: statusRegisterAlert.onOk
          }} />
        </form>
        <form onSubmit={handleSubmitLogin(handleLogin)}>
          <h3>Login</h3>
          <div className="input">
            <input placeholder="Email" {...registerLogin("email")} />
            {errorsLogin?.email && (<span className="helper-text">{errorsLogin?.email?.message}</span>)}
          </div>
          <div className="input">
            <input type="password" placeholder="Senha" {...registerLogin("password")} />
            {errorsLogin?.password && (<span className="helper-text">{errorsLogin?.password?.message}</span>)}
          </div>
          <button className="btn-form">Logar</button>
          <AlertInBox show={statusLoginAlert.show} loading={statusLoginAlert.loading} helperCard={{
            text: statusLoginAlert.message,
            onOk: statusLoginAlert.onOk
          }} />
        </form>
      </div>
    </S.CardAuthentication>
  ) : <></>
}

export default CardAuthentication
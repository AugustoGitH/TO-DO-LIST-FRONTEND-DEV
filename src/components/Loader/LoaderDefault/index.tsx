import { type ComponentProps } from "react"

import * as S from "./styles"

export interface ILoaderDefaultProps extends ComponentProps<"div"> {
  color: "dark" | "light",
  size?: "sm" | "md" | "lg"
}


const LoaderDefault = ({ color, size = "lg", ...restProps }: ILoaderDefaultProps): JSX.Element => {
  return (
    <S.LoaderDefault color={color} size={size} {...restProps}>
      <div className="loader">

      </div>
    </S.LoaderDefault>
  )
}

export default LoaderDefault
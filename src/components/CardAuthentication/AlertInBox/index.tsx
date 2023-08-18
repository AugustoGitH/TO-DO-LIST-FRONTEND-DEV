import { MouseEventHandler } from "react"
import { Loader } from "../../Loader"
import * as S from "./styles"

interface IAlertInBoxProps {
  show: boolean,
  loading: boolean
  helperCard?: {
    text?: string,
    onOk?: () => void
  }
}

const AlertInBox = ({ show, loading, helperCard }: IAlertInBoxProps): JSX.Element => {
  const handleOkHelperCard: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault()
    if (helperCard?.onOk) {
      helperCard.onOk()
    }
  }
  return show ? (
    <S.AlertInBox>
      {
        loading && !helperCard ?
          <Loader.Default color="dark" /> :
          <div className="helper-card">
            <span className="text">{helperCard?.text}</span>
            <button onClick={handleOkHelperCard}>Ok</button>
          </div>
      }

    </S.AlertInBox>
  ) : <></>
}

export default AlertInBox
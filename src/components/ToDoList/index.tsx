import { useContext } from "react"
import { ToDoListContext } from "../../contexts/todoListContext"
import CardAuthentication from "../CardAuthentication"
import InputTask from "./components/InputTask"
import ListTask from "./components/ListTask"
import * as S from "./styles"


const ToDoList = (): JSX.Element => {
  const { showCardAuth, setShowCardAuth } = useContext(ToDoListContext)
  return (
    <>
      <S.ToDoList>
        <div className="content">
          <h1>To do List</h1>
          <InputTask />
          <ListTask />
        </div>
      </S.ToDoList>
      <CardAuthentication show={showCardAuth} onClose={() => setShowCardAuth(false)} />
    </>
  )
}

export default ToDoList
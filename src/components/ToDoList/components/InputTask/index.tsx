import { useContext, useEffect, useState } from "react"
import * as S from "./styles"
import { ToDoListContext } from "../../../../contexts/toDoListContext"



const icons = {
  pen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path></svg>',
  plus: ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>'
}


const InputTask = (): JSX.Element => {
  const [name, setName] = useState("")
  const { outputTask, modeEditabled, cancelEdit, taskBeingEdited } = useContext(ToDoListContext)

  const handleOutputTask = (): void => {
    outputTask(name)
    setName("")
  }

  useEffect(() => {
    setName(prevName => taskBeingEdited?.name ?? prevName)
  }, [modeEditabled, taskBeingEdited])

  return (
    <S.InputTask>
      <label htmlFor="input-task">{modeEditabled ? "Editar tarefa" : "Adicionar tarefa"}</label>
      <div className="input-and-btns">
        <input id="input-task" value={name} onChange={ev => setName(ev.target.value)} />
        <button className="btn-add" dangerouslySetInnerHTML={{ __html: modeEditabled ? icons.pen : icons.plus }} onClick={handleOutputTask} />
        {
          modeEditabled && (
            <button className="btn-cancel" dangerouslySetInnerHTML={{ __html: icons.x }} onClick={cancelEdit} />
          )
        }
      </div>
    </S.InputTask>
  )
}

export default InputTask
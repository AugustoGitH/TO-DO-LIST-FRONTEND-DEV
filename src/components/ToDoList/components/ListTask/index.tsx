import { useContext } from "react"
import * as S from "./styles"
import { ToDoListContext } from "../../../../contexts/toDoListContext"
import { ITask } from "../../../../types/ITask"
import TitleItem from "../../../TitleItem"
import sortTasks from "../../../../utils/sortTasks"

const icons = {
  edit: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>',
  checkbox: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="m10.933 13.519-2.226-2.226-1.414 1.414 3.774 3.774 5.702-6.84-1.538-1.282z"></path><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path></svg>',
  checkbox_checked: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-7.933 13.481-3.774-3.774 1.414-1.414 2.226 2.226 4.299-5.159 1.537 1.28-5.702 6.841z"></path></svg>'
}


interface ITaskProps {
  task: ITask
}

const Task = ({ task }: ITaskProps): JSX.Element => {
  const { deleteTask, editTask, modeEditabled, toggleCheckTask } = useContext(ToDoListContext)
  return (
    <S.Task wasfinished={task.wasFinished.toString()}>
      <span className="name-task" style={task.wasFinished ? { textDecoration: "line-through" } : {}}>{task.name}</span>
      <div className="controller">
        <TitleItem title={task.wasFinished ? "Tarefa concluida" : "Concluir tarefa"}>
          <button disabled={modeEditabled} onClick={() => toggleCheckTask(task.id)} className="btn-check" dangerouslySetInnerHTML={{ __html: task.wasFinished ? icons.checkbox_checked : icons.checkbox }} />
        </TitleItem>
        <TitleItem title="Editar tarefa">
          <button disabled={modeEditabled} onClick={() => editTask(task)} className="btn-edit" dangerouslySetInnerHTML={{ __html: icons.edit }} />
        </TitleItem>
        <TitleItem title="Deletar tarefa">
          <button disabled={modeEditabled} onClick={() => deleteTask(task.id)} className="btn-del" dangerouslySetInnerHTML={{ __html: icons.trash }} />
        </TitleItem>
      </div>
    </S.Task>
  )
}

const ListTask = (): JSX.Element => {
  const { tasks } = useContext(ToDoListContext)
  return (
    <S.ListTask>
      {
        sortTasks(tasks).map((task) => <Task key={task.id} task={task} />)
      }
    </S.ListTask>
  )
}

export default ListTask
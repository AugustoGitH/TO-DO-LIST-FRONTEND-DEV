import { ReactNode, createContext, useEffect, useState } from "react";
import { ITask } from "../../types/ITask";

import { TaskService } from "../../services/TaskService";
import useGetTasksQuery from "../../queries/useGetTasksQuery";
import { ITasksContext } from "./types";
interface ITasksProviderProps {
  children: ReactNode;
}


export const ToDoListContext = createContext({} as ITasksContext)


const ToDoListProvider = ({ children }: ITasksProviderProps): JSX.Element => {
  const { data: dataResponseGetTasks } = useGetTasksQuery()
  const [tasks, setTasks] = useState<ITask[]>([])
  const [modeEditabled, setModeEditabled] = useState(false)
  const [taskBeingEdited, setTaskBeingEdited] = useState<ITask | null>(null)
  const [showCardAuth, setShowCardAuth] = useState(false)


  useEffect(() => {
    if (dataResponseGetTasks?.tasks) {

      setTasks(dataResponseGetTasks?.tasks)
    }
  }, [dataResponseGetTasks])


  const outputTask = async (name: string) => {
    if (!name) return

    if (modeEditabled && taskBeingEdited) {
      const { success, status } = await TaskService.update({ name }, taskBeingEdited.id)

      if (!success) {
        if (status === 401) {
          setShowCardAuth(true)
        }
        return
      }


      setTasks(prevTasks => {
        const taskSelected = tasks.find(task => task.id === taskBeingEdited.id)
        const positionTaskSelected = prevTasks.map(task => task.id).indexOf(taskBeingEdited.id)
        if (!taskSelected || positionTaskSelected === -1) return prevTasks
        const newTaskEdited: ITask = { ...taskSelected, name }
        const cloneTasks = [...prevTasks]
        cloneTasks.splice(positionTaskSelected, 1, newTaskEdited)
        return cloneTasks
      })
      cancelEdit()
      return
    }

    const { success, taskCreated, status } = await TaskService.create(name)
    if (!success || !taskCreated) {
      console.log(status)
      if (status === 401) {
        setShowCardAuth(true)
      }
      return
    }

    setTasks(prevTasks => [taskCreated, ...prevTasks])

  }

  const deleteTask = async (id: string) => {
    const { success, idTaskDeleted, status } = await TaskService.delete(id)
    if (!success) {
      if (status === 401) {
        setShowCardAuth(true)
      }
      return
    }

    setTasks(prevTasks => prevTasks.filter(task => task.id !== idTaskDeleted))
  }


  const editTask = (task: ITask) => {
    setModeEditabled(true)
    setTaskBeingEdited(task)
  }

  const toggleCheckTask = async (id: string) => {
    const taskSelected = tasks.find(task => task.id === id)
    if (taskSelected) {
      const { success, status } = await TaskService.update({ wasFinished: !taskSelected.wasFinished }, taskSelected.id)
      if (!success) {
        if (status === 401) {
          setShowCardAuth(true)
        }
        return
      }

      setTasks(prevTasks => {
        const positionTaskSelected = prevTasks.map(task => task.id).indexOf(id)
        if (!taskSelected || positionTaskSelected === -1) return prevTasks
        const newTaskEdited: ITask = { ...taskSelected, wasFinished: !taskSelected.wasFinished }
        const cloneTasks = [...prevTasks]
        cloneTasks.splice(positionTaskSelected, 1, newTaskEdited)
        return cloneTasks
      })

    }

  }

  const cancelEdit = () => {
    setModeEditabled(false)
    setTaskBeingEdited(null)
  }

  return (
    <ToDoListContext.Provider value={{ taskBeingEdited, cancelEdit, outputTask, tasks, deleteTask, editTask, toggleCheckTask, modeEditabled, showCardAuth, setShowCardAuth }}>
      {children}
    </ToDoListContext.Provider>
  )
}

export default ToDoListProvider
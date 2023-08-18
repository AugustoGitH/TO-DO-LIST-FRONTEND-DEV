import { Dispatch, SetStateAction } from "react";
import { ITask } from "../../types/ITask";

export interface ITasksContext {
  tasks: ITask[];
  outputTask: (name: string) => void;
  deleteTask: (id: string) => void;
  editTask: (task: ITask) => void;
  toggleCheckTask: (id: string) => void;
  modeEditabled: boolean;
  cancelEdit: () => void;
  taskBeingEdited: ITask | null;
  showCardAuth: boolean;
  setShowCardAuth: Dispatch<SetStateAction<boolean>>;
}

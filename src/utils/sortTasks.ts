import { ITask } from "../types/ITask";

const sortTasks = (tasks: ITask[]) => {
  const tasksInUpdateOrder = [...tasks].sort((taskA, taskB) => {
    const timeA = new Date(taskA.updatedAt).getTime();
    const timeB = new Date(taskB.updatedAt).getTime();

    return timeB - timeA;
  });

  const unfinishedTasks = tasksInUpdateOrder.filter(
    (task) => !task.wasFinished
  );
  const finishedTasks = tasksInUpdateOrder.filter((task) => task.wasFinished);

  const tasksSortedByCompletionOrder = [...unfinishedTasks, ...finishedTasks];

  return tasksSortedByCompletionOrder;
};

export default sortTasks;

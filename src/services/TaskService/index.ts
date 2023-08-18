import createTaskService from "./createTaskService";
import deleteTaskService from "./deleteTaskService";
import updateTaskService from "./updateTaskService";

export const TaskService = {
  create: createTaskService,
  delete: deleteTaskService,
  update: updateTaskService,
};

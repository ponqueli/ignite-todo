import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface ITask {
  task: {
    id: string;
    description: string;
    isCompleted: boolean;
  };
  changeIsComplete: (id: string) => void;
  deleteTask: (id: string) => void;
}
export function Task({ task, deleteTask, changeIsComplete }: ITask) {
  const { id, description, isCompleted } = task;
  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const handleChangeIsComplete = () => {
    changeIsComplete(id);
  };


  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.checkBox} onClick={handleChangeIsComplete} />
      <p className={isCompleted ? styles.taskChecked : styles.taskUnchecked}>{description}</p>
      <button type="button" onClick={handleDeleteTask} >
        <Trash size={24} />
      </button>
    </div>
  );
}

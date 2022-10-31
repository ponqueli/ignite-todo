import styles from "./ResumeInfo.module.css";

interface IResumeInfo {
  createdTasks: number;
  doneTasks: number;
}

export function ResumeInfo({ createdTasks, doneTasks }: IResumeInfo) {
  return (
    <div className={styles.resumeInfo}>
      <strong className={styles.createdTask}>
        Tarefas criadas <span>{createdTasks}</span>
      </strong>
      <strong className={styles.doneTask}>
        Concluídas <span>{doneTasks}</span>
      </strong>
    </div>
  );
}

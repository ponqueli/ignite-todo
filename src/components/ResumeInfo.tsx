import styles from "./ResumeInfo.module.css";

export function ResumeInfo() {
  return (
    <div className={styles.resumeInfo}>
      <strong className={styles.createdTask}>
        Tarefas criadas <span>5</span>
      </strong>
      <strong className={styles.doneTask}>
        Concluídas <span>2</span>
      </strong>
    </div>
  );
}

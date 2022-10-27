import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.checkBox} />
      <p>Estudar React</p>
      <button type="button">
        <Trash size={24} />
      </button>
    </div>
  );
}

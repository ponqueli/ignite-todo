import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <p>Estudar React</p>
      <button type="button">
        <Trash size={32} />
      </button>
    </div>
  );
}

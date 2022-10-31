import { InvalidEvent } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

interface INewTask {
  description: string;
  onHandleNewTask: (onHandleNewTask: any) => void;
  onHandleSubmit: (onHandleSubmit: any) => void;
}

export function NewTask({
  description,
  onHandleNewTask,
  onHandleSubmit,
}: INewTask) {
  const handleInputInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Digite uma tarefa");
  };

  const isDescriptionEmpty = description?.trim().length === 0;

  return (
    <form className={styles.form} onSubmit={onHandleSubmit}>
      <input
        onKeyDown={(e) => e.key === "Enter" && onHandleSubmit(e)}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={description}
        onChange={onHandleNewTask}
        onInvalid={handleInputInvalid}
      />
      <button type="submit" disabled={isDescriptionEmpty}>
        Criar
        {!isDescriptionEmpty && <PlusCircle size={20} color="var(--white)" />}
      </button>
    </form>
  );
}

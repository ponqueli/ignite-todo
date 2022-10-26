import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import { ResumeInfo } from "./components/ResumeInfo";
import styles from "./App.module.css";
import "./global.css";
import { Task } from "./components/Task";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.inputGroup}>
          <input
            // onKeyDown={(e) => e.key === "Enter" && handleCreateNewTask()}
            type="text"
            placeholder="Adicione uma nova tarefa"
          // onChange={(e) => setNewTaskTitle(e.target.value)}
          // value={newTaskTitle}
          />
          <button
            type="submit"
          // onClick={handleCreateNewTask}
          >
            Criar
            <PlusCircle size={20} color="var(--white)" />
          </button>
        </div>
        <div className={styles.resume}>
          <ResumeInfo />

          <div className={styles.tasks}>
            <Task />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

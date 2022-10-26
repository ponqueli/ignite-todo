import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";

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
      </main>
    </>
  );
}

export default App;

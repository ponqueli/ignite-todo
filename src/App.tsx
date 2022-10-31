/* eslint-disable react/jsx-no-bind */
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { ResumeInfo } from "./components/ResumeInfo";
import styles from "./App.module.css";
import "./global.css";
import { Task } from "./components/Task";
import { NewTask } from "./components/NewTask";
import { EmptyList } from "./components/EmptyList";

interface ITasks {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [taskList, setTaskList] = useState(Array<ITasks>);
  const [description, setDescription] = useState<string>("");

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setDescription(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: uuidv4(),
        description,
        isCompleted: false,
      },
    ]);
    setDescription("");
  }

  function changeIsComplete(id: string) {
    const todoListWithChangedTask = taskList.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
        return task;
      }
      return task;
    })

    setTaskList(todoListWithChangedTask);
  }

  function deleteTask(id: string) {
    const todoListWithoutDeletedTask = taskList.filter((task) => {
      return task.id !== id
    })

    setTaskList(todoListWithoutDeletedTask)
  }

  return (
    <>
      <Header />
      <main>
        <NewTask
          description={description}
          onHandleNewTask={handleNewTask}
          onHandleSubmit={handleSubmit}
        />
        <div className={styles.resume}>
          <ResumeInfo />

          <div className={styles.tasks}>
            {taskList.length === 0 ? <EmptyList /> :
              taskList.map((task) => (
                <Task key={task.id} task={task} changeIsComplete={changeIsComplete} deleteTask={deleteTask} />
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

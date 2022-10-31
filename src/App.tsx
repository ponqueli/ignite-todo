/* eslint-disable react/jsx-no-bind */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
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
  const key = "@IgniteToDo";

  function showSucessfullToast(message: string): void {
    toast.success(message, {
      style: {
        borderRadius: '10px',
        background: 'var(--gray400)',
        color: 'var(--gray100)',
      }
    });
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setDescription(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const tasksToSave = [
      ...taskList,
      {
        id: uuidv4(),
        description,
        isCompleted: false,
      },
    ];

    setTaskList(tasksToSave);
    localStorage.setItem(key, JSON.stringify(tasksToSave));
    showSucessfullToast('Tarefa criada com sucesso!');
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

    localStorage.setItem(key, JSON.stringify(todoListWithChangedTask));
    showSucessfullToast('Tarefa alterada com sucesso!');
    setTaskList(todoListWithChangedTask);
  }

  function deleteTask(id: string) {
    const todoListWithoutDeletedTask = taskList.filter((task) => {
      return task.id !== id
    })

    localStorage.setItem(key, JSON.stringify(todoListWithoutDeletedTask));
    setTaskList(todoListWithoutDeletedTask);
    showSucessfullToast('Tarefa excluída com sucesso!');
  }

  const getSavedTasks = (key: string): ITasks[] => {
    const myTasks = localStorage.getItem(key);
    if (myTasks) {
      return JSON.parse(myTasks);
    }
    return [];
  }

  useEffect(() => {
    function getTasks() {
      const result = getSavedTasks(key);
      setTaskList(result);
    }
    getTasks();
  }, []);

  const createdTasksQuantity = taskList.filter((task) => !task.isCompleted).length;
  const completedTasksQuantity = taskList.filter((task) => task.isCompleted).length;
  const isTaskListEmpty = taskList.length === 0;
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
          {!isTaskListEmpty && <ResumeInfo createdTasks={createdTasksQuantity} doneTasks={completedTasksQuantity} />}

          <div className={styles.tasks}>
            {isTaskListEmpty ? <EmptyList /> :
              taskList.map((task) => (
                <Task key={task.id} task={task} changeIsComplete={changeIsComplete} deleteTask={deleteTask} />
              ))
            }
          </div>
        </div>
      </main>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;

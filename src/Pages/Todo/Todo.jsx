import { useState } from "react";

const Todo = () => {
  interface Task {
    id: number;
    name: string;
  }
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [task, setTask] = useState<string>('');

  const addTask = (e) => {
    e.preventDefault();
    console.log("call addTask")
    setTodoList((prev: Task[]) => {
      const newTask: Task = {
        id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
        name: task
      }
      return [...prev, newTask]
    })
  }

  const handleTask = (e: any) => {
    e.preventDefault();
    setTask(e.target.value);
  }
  const removeTask = (id: number) => {
    console.log("call removeTask")
    const filteredTask = todoList.filter(currentTask => currentTask.id !== id);
    setTodoList(filteredTask);
  }

  const renderTasks = (task: Task) => {
    return (
      <li key={task.id}>
        {task.name}
      </li>
    )
  }
  return (
    <div>
      <form onSubmit={(e) => addTask(e)}>
        <input type="text" onChange={(e) => handleTask(e)} placeholder="Your task" />
        <button>Add Task</button>
      </form>
      <ul>
        {todoList.map(task => renderTasks(task))}
      </ul>

    </div>
  )
}
export default Todo;
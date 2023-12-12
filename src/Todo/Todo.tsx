import { useState, useRef } from "react";

const Todo = () => {
  interface Task {
    id: number;
    taskName: string;
  }
  const [todoList, setTodoList] = useState<Task[]>([]);
  const newTaskName = useRef("");

  const addTask = (e) => {
    e.preventDefault()
    setTodoList((prev: Task[]) => {
      const newTask: Task = {
        id: todoList.length == 0 ? 1 : todoList[todoList.length-1].id + 1,
        taskName: newTaskName.current.value
      }
      return [...prev, newTask]
    })
    newTaskName.current.value=""
  }
  // const removeTask=(id:number)=>{
    
  // }

  return (
    <div>
      <form onSubmit={addTask}>
        <input type="text" ref={newTaskName} placeholder="Your task" />
        <button>Add Task</button>
      </form>
      

    </div>
  )
}
export default Todo;
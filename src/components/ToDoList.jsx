import ItemList from "./ItemList";

const ToDoList = () => {
  return (
    <div className="todolist-container">
      <button className="todolist-btn-add">Add Task</button>
      <ItemList />
      <button className="todolist-btn-remove">Remove All</button>
    </div>
  )
}

export default ToDoList
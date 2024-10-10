import ItemList from "./ItemList";
import Modal from "./modal";
import { useState } from "react";

const ToDoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <div className="todolist-container">
        <button className="todolist-btn-add" onClick={showModal}>Add Task</button>
        <ItemList />
        <button className="todolist-btn-remove">Remove All</button>
        {isModalOpen && 
        <Modal className="transition-all duration-200">
          <form className="flex flex-col gap-8">
            <label className="relative flex flex-col justify-center mt-3">
              <input className="w-full px-4 rounded-md h-[60px] text-sm bg-[#423A6F] focus:outline-none peer " type="text" />
              <span className="absolute text-gray-400 px-4 font-semibold text-sm top-5 peer-focus:top-[2px] peer-focus:font-normal cursor-text transition-all duration-200">Task Name</span>
            </label>
            <button className="todolist-btn-add mx-auto" type="submit" >Add Task</button>
          </form>
        </Modal>
      }
      </div>
    </div>
  );
};


export default ToDoList;

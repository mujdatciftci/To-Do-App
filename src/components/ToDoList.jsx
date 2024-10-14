import ItemList from "./ItemList";
import Modal from "./modal";
import { useState } from "react";
import { motion } from "framer-motion";

const ToDoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (inputText) {
      setItems((prevItems) => [
        ...prevItems,
        { id: prevItems.length + 1, taskName: inputText, status: false },
      ]);
      setInputText("");
      setIsModalOpen(false);
    }
  };

  const removeAll = () => {
    setItems([]);
  };

  return (
    <div>
      <div className="todolist-container ">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="todolist-btn-add"
          onClick={showModal}
        >
          Add Task
        </motion.button>
        <ItemList
          inputText={inputText}
          setInputText={setInputText}
          items={items}
          setItems={setItems}
          setIsModalOpen={setIsModalOpen}
        />
        <motion.button
          whileHover={items.length !== 0 ? { scale: 1.1 } : { scale: 1 }}
          className={`todolist-btn-remove ${
            items.length === 0 ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={removeAll}
          disabled={items.length === 0}
        >
          Remove All
        </motion.button>
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
            <form className="flex flex-col gap-8">
              <label className="relative flex flex-col justify-center mt-3">
                <input
                  className="w-full px-4 rounded-md h-[65px] text-sm text-white bg-[#423A6F] focus:outline-none peer "
                  type="text"
                  onChange={inputChange}
                  value={inputText}
                />
                <span
                  className={`absolute text-gray-400 px-4 font-semibold text-sm top-5 ${inputText ? "top-[2px] font-normal" : ""
                  } peer-focus:top-[2px] peer-focus:font-normal cursor-text transition-all duration-200`}
                >
                  Task Name
                </span>
              </label>
              <button
                className={`todolist-btn-add mx-auto transition-all duration-500 ${
                  !inputText ? "opacity-70 cursor-not-allowed " : ""
                }`}
                type="submit"
                onClick={addTask}
                disabled={!inputText}
              >
                Add Task
              </button>
            </form>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ToDoList;

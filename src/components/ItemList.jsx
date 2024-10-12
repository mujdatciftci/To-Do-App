import { useState } from "react";
import { useEffect } from "react";
import { PiDotsSixBold } from "react-icons/pi";
import { SlPencil } from "react-icons/sl";
import { IoTrashOutline } from "react-icons/io5";
import { Reorder } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const ItemList = ({ inputText, setInputText }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (inputText) {
      setItems((prevItems) => [
        ...prevItems,
        { id: prevItems.length + 1, name: inputText, status: false },
      ]);
    }
  }, [inputText]);
  return (
    <div className="min-h-[100px]">
      <header className="itemlist-header">
        <h2 className="col-start-2 col-end-10 text-3xl font-semibold">
          Task Name
        </h2>
        <h5 className="text-xl font-semibold mx-auto">Status</h5>
        <h5 className="text-xl font-semibold mx-auto">Edit</h5>
        <h5 className="text-xl font-semibold mx-auto">Remove</h5>
      </header>
      
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="w-[1000px]"
        >
          <AnimatePresence>
          {items.map((item) => (
            
            <Reorder.Item
              key={item.id}
              value={item}
              className="itemlist-item flex items-center p-2"
              whileDrag={{ scale: 1.02, zIndex: 1 }}
              initial={{ translateY: 30 }}
              animate={{ translateY: 0 }}
              exit={{ translateX: 100 }}
              transition={{ duration: 0.5 }}
            >
              <PiDotsSixBold className="text-[25px] mx-auto hover:cursor-move" />
              <p className="col-start-2 col-end-10">{item.name}</p>
              <input
                type="checkbox"
                name="status"
                checked={item.status}
                onChange={() =>
                  setItems((prev) =>
                    prev.map((i) =>
                      i.id === item.id ? { ...i, status: !i.status } : i
                    )
                  )
                }
                className="itemlist-checkbox mx-auto"
              />
              <button className="mx-auto">
                <SlPencil className="itemlist-edit" />
              </button>
              <motion.button
                className="mx-auto"
                onClick={() =>
                  setItems((prev) => prev.filter((i) => i.id !== item.id))
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoTrashOutline className="itemlist-remove" />
              </motion.button>
            </Reorder.Item>
            
          ))}
          </AnimatePresence>
        </Reorder.Group>
      
    </div>
  );
};

export default ItemList;

import React from "react";
import { motion, Reorder } from "framer-motion";
import { PiDotsSixBold } from "react-icons/pi";
import { SlPencil } from "react-icons/sl";
import { IoTrashOutline } from "react-icons/io5";


const Item = ({setItems, item,}) => {
 

  const handleStatus = (idFromCheckbox) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === idFromCheckbox ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <Reorder.Item
      value={item}
      className="itemlist-item flex items-center p-2"
      whileDrag={{ scale: 1.02, zIndex: 1 }}
      initial={{ translateY: 30 }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ translateX: 100, opacity: 0, transition: { duration: 0.2 } }}
    >
      <PiDotsSixBold className="text-[25px] mx-auto hover:cursor-move" />
      <p
        className={`col-start-2 col-end-10 ${
          item.status ? " opacity-40 transition-all duration-300" : ""
        }`}
      >
        {item.taskName}
      </p>
      <input
        type="checkbox"
        name="status"
        defaultChecked={item.status}
        onClick={() => handleStatus(item.id)}
        className="itemlist-checkbox mx-auto"
      />
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="mx-auto"
      >
        <SlPencil className="itemlist-edit" />
      </motion.button>
      <motion.button
        className="mx-auto"
        onClick={() =>
          setItems((prevItems) => prevItems.filter((i) => i.id !== item.id))
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <IoTrashOutline className="itemlist-remove" />
        </motion.div>
      </motion.button>
    </Reorder.Item>
  );
};

export default Item;

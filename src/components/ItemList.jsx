import { motion, AnimatePresence, Reorder } from "framer-motion";
import Item from "./Item";

const ItemList = ({items,setItems}) => {
  
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
            <Item
              setItems={setItems}
              item={item}
              key={item.id}
            />
          ))} 
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default ItemList;

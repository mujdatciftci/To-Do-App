import { motion, AnimatePresence, Reorder } from "framer-motion";
import Item from "./Item";
import { useRef } from "react";

const ItemList = ({ items, setItems }) => {
  const mainRef = useRef(null);

  const handleScroll = (event) => {
    if (mainRef.current) {
      mainRef.current.scrollTop += event.deltaY;
    }
  };
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
      <main
        className="box-shadow min-h-[280px] max-h-[300px] overflow-hidden overscroll-contain"
        onWheel={handleScroll}
        ref={mainRef}
      >
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className="w-[1000px]"
        >
          <AnimatePresence>
            {items.map((item) => (
              <Item setItems={setItems} item={item} key={item.id} />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </main>
    </div>
  );
};

export default ItemList;

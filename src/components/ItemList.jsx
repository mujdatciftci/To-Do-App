
import { PiDotsSixBold } from "react-icons/pi";
import { SlPencil } from "react-icons/sl";
import { IoTrashOutline } from "react-icons/io5";

const ItemList = () => {
  return (
    <div className="min-h-[100px]">
       <header className="itemlist-header">
              <h2 className="col-start-2 col-end-10 text-3xl font-semibold">Task Name</h2>
              <h5 className="text-xl font-semibold mx-auto">Status</h5>
              <h5 className="text-xl font-semibold mx-auto">Edit</h5>
              <h5 className="text-xl font-semibold mx-auto">Remove</h5>
       </header>
       <ul className="w-[1000px]">
            <li className="itemlist-item">
              <PiDotsSixBold className="text-[25px] mx-auto hover:cursor-move" />
              <p className="col-start-2 col-end-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, minima!</p>
              <input type="checkbox" name="status" id="" className="itemlist-checkbox"/>
              <button className="mx-auto"><SlPencil className="itemlist-edit" /></button>
              <button className="mx-auto"><IoTrashOutline className="itemlist-remove" /></button>
            </li> 
       </ul>
    </div>
  )
}

export default ItemList
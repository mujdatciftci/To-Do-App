
import ReactDOM from "react-dom";
import Overlays from "./Overlays";
import ModalForm from "./ModalForm";

const Modal = ({children, setIsModalOpen}) => {
  
  return (
    <div>
      {ReactDOM.createPortal(<Overlays setIsModalOpen={setIsModalOpen}/>, document.getElementById("overlays"))}
      {ReactDOM.createPortal(<ModalForm>{children}</ModalForm>, document.getElementById("overlays"))} 
    </div>
  );
}
export default Modal;

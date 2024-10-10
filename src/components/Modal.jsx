const Modal = ({children }) => {
  
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-screen bg-primary bg-opacity-50"></div>
      <div className="fixed bg-gray-200 p-4 rounded-lg w-[600px] h-[220px] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%]">
        {children}
      </div>
    </div>
  );
}
export default Modal;

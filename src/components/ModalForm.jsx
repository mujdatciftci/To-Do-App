const ModalForm = ({children}) => {
       return (
         <div className="fixed bg-gray-200 p-4 rounded-lg w-[600px] h-[220px] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] z-20">
               {children}
           </div>
       )
     }

export default ModalForm;
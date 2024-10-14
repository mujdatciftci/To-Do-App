import { motion } from "framer-motion";
const ModalForm = ({children}) => {
       return (
         <motion.div 
         initial={{opacity: 0}} 
         animate={{opacity: 1}}
         transition={{duration: 0.3}}
         className="fixed bg-gray-200 p-4 rounded-lg w-[600px] h-[220px] mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] z-20">
               {children}
           </motion.div>
       )
     }

export default ModalForm;
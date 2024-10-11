import { motion } from "framer-motion";

const Overlays = ({setIsModalOpen}) => {
       return (
        <>
         <motion.div className="fixed inset-0  bg-primary bg-opacity-80 z-10" onClick={() => setIsModalOpen(false)}
         initial={{opacity: 0}} 
         animate={{opacity: 1}} 
         exit={{opacity: 0}} 
         transition={{duration: 0.3}}
         ></motion.div>
       </>
       )
     }

export default Overlays;

import Navbar from "./navbar";
import ash from './ash.png';
import red from './red.png';
import gold from './gold.png';
import blue from './blue.png';
import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <div className="">
            <Navbar/>
            <div className="w-full flex flex-row overflow-hidden">
                <motion.div 
                initial={{width:'25%'}}
                whileHover={{width:'32%'}}
                // transition={{duration:0.5}}
                className=" w-1/4 h-[100vh] bg-[#727774] flex justify-center items-center">
                    <motion.img 
                    initial={{x:'80px', rotate:40}}
                    whileHover={{x:0, rotate:40}}
                    transition={{type:'spring', stiffness:50}}
                    src={ ash } className=' rotate-[40deg] z-[5]' alt="" />
                </motion.div>

                <motion.div 
                initial={{width:'25%'}}
                whileHover={{width:'32%'}}
                // transition={{duration:0.5}}
                className=" w-1/4 h-[100vh] bg-[#a11818] flex justify-center z-10 items-center">
                    <motion.img
                    initial={{x:'80px', rotate:40}}
                    whileHover={{x:0, rotate:40}}
                    transition={{type:'spring', stiffness:50}}
                    src={ red } className=' rotate-[40deg] ' alt="" />
                </motion.div>

                <motion.div 
                initial={{width:'25%'}}
                whileHover={{width:'32%'}}
                // transition={{duration:0.5}}
                className=" w-1/4 h-[100vh] bg-[#c4b17f] flex justify-center z-20 items-center">
                    <motion.img
                    initial={{x:'80px', rotate:40}}
                    whileHover={{x:0, rotate:40}}
                    transition={{type:'spring', stiffness:50}}
                    src={ gold } className=' rotate-[40deg] ' alt="" />
                </motion.div>

                <motion.div 
                initial={{width:'25%'}}
                whileHover={{width:'32%'}}
                // transition={{duration:0.5}}
                className=" w-1/4 h-[100vh] bg-[#223558] flex justify-center z-30 items-center">
                    <motion.img
                    initial={{x:'80px', rotate:40}}
                    whileHover={{x:0, rotate:40}}
                    transition={{type:'spring', stiffness:50}}
                    src={ blue } className=' rotate-[40deg]' alt="" />
                </motion.div>
            </div>
        </div>
     );
}
 
export default Home;
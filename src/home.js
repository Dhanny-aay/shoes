import Navbar from "./navbar";
import ash from './ash.png';
import red from './red.png';
import gold from './gold.png';
import blue from './blue.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
    let divVariants ={};
    let shoeVariants={}
    const isMobile = window.innerWidth < 768;
    if(!isMobile){
        divVariants = {
            initial:{
                width:'25%'
            },
            hover:{
                width:'32%'
            }
        };
        shoeVariants={
            initial:{
                x:'80px',
                rotate:40
            },
            hover:{
                x:0, 
                rotate:40
            },
            transition:{
                type:'spring',
                 stiffness:50
            },
        }
    }
    else{
        shoeVariants={
            initial:{
                x:100,
            },
            animate:{
                x:0, 
            },
            transition:{
                type:'spring',
                 stiffness:120
            },
        }
    }
    return ( 
        <div className="">
            <Navbar/>
            <div className="w-full flex md:flex-row flex-col overflow-hidden">
                <motion.div variants={divVariants} initial='initial' whileHover='hover' className=" md:w-1/4 w-[100%] md:h-[100vh] h-[25vh] bg-[#727774] flex justify-center items-center">
                    <Link to='/ash'>
                    <motion.img variants={shoeVariants} initial='initial' animate='animate' whileHover='hover' transition='transition' src={ ash } className=' md:rotate-[40deg] z-[5] w-[170px] h-[85px] md:w-full md:h-full lg:w-[300px] lg:h-[150px]' alt="" />
                    </Link>
                </motion.div>

                <motion.div variants={divVariants} initial='initial' whileHover='hover' className=" md:w-1/4 w-[100vw] md:h-[100vh] h-[25vh] bg-[#a11818] flex justify-center z-10 items-center">
                    <Link to='/red'>
                    <motion.img variants={shoeVariants} initial='initial' animate='animate' whileHover='hover' transition='transition' src={ red } className=' md:rotate-[40deg] z-[5] w-[170px] h-[85px] md:w-full md:h-full lg:w-[300px] lg:h-[150px]' alt="" />
                    </Link>
                </motion.div>

                <motion.div variants={divVariants} initial='initial'  whileHover='hover' className=" md:w-1/4 w-[100vw] md:h-[100vh] h-[25vh] bg-[#c4b17f] flex justify-center z-20 items-center">
                    <Link to='/gold'>
                    <motion.img variants={shoeVariants} initial='initial' animate='animate' whileHover='hover' transition='transition' src={ gold } className=' md:rotate-[40deg] z-[5] w-[170px] h-[85px] md:w-full md:h-full lg:w-[300px] lg:h-[150px]' alt="" />
                    </Link>
                </motion.div>

                <motion.div variants={divVariants} initial='initial' whileHover='hover' className=" md:w-1/4 w-[100vw] md:h-[100vh] h-[25vh] bg-[#223558] flex justify-center z-30 items-center">
                    <Link to='/blue'>
                    <motion.img variants={shoeVariants} initial='initial' animate='animate' whileHover='hover' transition='transition' src={ blue } className=' md:rotate-[40deg] z-[5] w-[170px] h-[85px] md:w-full md:h-full lg:w-[300px] lg:h-[150px]' alt="" />
                    </Link>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Home;
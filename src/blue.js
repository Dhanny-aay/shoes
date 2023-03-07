import Navbar from "./navbar";
import red from './red.png';
import blue from './blue.png';
import ash from './ash.png';
import gold from './gold.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blue = () => {
    return ( 
        <motion.div 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{x:-100, opacity:0}}
            transition={{type:'spring', stiffness:80, duration:0.2 }}
            className=" text-[#e2dede] ">
            <motion.div 
            initial={{height:'100vh'}}
            animate={{height:'70vh'}}
            transition={{delay:0.5, duration:0.6}}
            className=" w-full bg-[#223558] flex relative items-center px-[20%]">
                <div className=" flex justify-between items-center w-full">
                    <motion.img 
                    initial={{rotate:40}}
                    animate={{rotate:0}}
                    transition={{ delay:1.2, duration:0.4}}
                    src={ blue } className=' w-[170px] h-[85px] md:w-[300px] md:h-[150px] md:fixed left-[10%]' alt="" />
                    <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1.5, duration:0.5, type:'tween'}}
                    className=" flex flex-col text-left md:ml-auto absolute bottom-10 left-10 md:static">
                        <p className=" font-bold font-Tilt text-2xl tracking-wider">Arch Blue</p>
                        <p className=" font-semibold font-Tilt text-2xl tracking-wider">SWA</p>
                        <span className=" flex flex-row text-xs font-light font-Tilt space-x-5">
                            <p className="">Info</p>
                            <p className="">Check Stock</p>
                        </span>
                    </motion.div>
                </div>
            </motion.div>
            <div className=" w-full flex md:flex-row flex-col p-5 md:p-0 ">
                <div className=" md:w-[60%] w-full relative">
                    <div className=" md:absolute left-[12%] bottom-12">
                        <div className=" flex flex-row">
                            <Link to='/red' className=" p-5 hover:border-2 rounded-md border-[#e2dede]">
                            <span>
                                <img src={ red } className=' w-[70px] h-[30px]' alt="" />
                            </span>
                            </Link>
                            <span className=" p-5 border-2 rounded-md border-[#e2dede]">
                                <img src={ blue } className=' w-[70px] h-[30px]' alt="" />
                            </span>
                            <Link to='/gold' className=" p-5 hover:border-2 rounded-md border-[#e2dede]">
                            <span className="">
                                <img src={ gold } className=' w-[70px] h-[30px]' alt="" />
                            </span>
                            </Link>
                            <Link to='/ash' className=" p-5 hover:border-2 rounded-md border-[#e2dede]">
                            <span className="">
                                <img src={ ash } className=' w-[70px] h-[30px]' alt="" />
                            </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-[40%] w-full flex flex-col pt-7">
                    <div className=" space-y-6">
                        <p className=" text-[#223558] text-left tracking-wide font-Kanit font-semibold">$60</p>
                        <span className=" flex flex-row space-x-5">
                            <button className=" border border-[#223558] text-[#223558] px-[20px] py-[5px] font-Labrada text-base font-medium">Store</button>
                            <button className=" bg-[#223558] text-white px-[20px] py-[5px] font-Labrada text-base font-medium">View Collection</button>
                        </span>
                    </div>
                    <div className="mt-8 w-full px-6 pt-5 pb-8 bg-[#223558]">
                        <p className=" font-Labrada text-[#e2dede] text-lg font-bold">About me</p>
                        <p className="font-Labrada mt-5 text-[#e2dede] text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget nulla justo. Curabitur massa leo, bibendum sed dui in, dignissim gravida mi. Curabitur et maximus sapien, vel faucibus purus. Sed convallis condimentum volutpat. Aliquam rutrum elit eu egestas porttitor. Praesent scelerisque mollis elementum. Nam at nibh leo. Aliquam id blandit mauris, sit amet tincidunt ex. Nam et nunc ac nulla sollicitudin hendrerit. Maecenas nec pharetra.</p>
                        <div className=" mt-6 flex flex-row justify-between font-Labrada text-[#e2dede]">
                            <div className=" flex flex-col space-y-4">
                                <span className=" ">
                                    <p className=" font-bold text-base">Color</p>
                                    <p className=" font-nomal text-sm">Blue/Black</p>
                                </span>
                                <span className=" ">
                                    <p className=" font-bold text-base">Sole</p>
                                    <p className=" font-nomal text-sm">100% Quality Materials</p>
                                </span>
                                <span className=" ">
                                    <p className=" font-bold text-base">Product Code</p>
                                    <p className=" font-nomal text-sm">855854</p>
                                </span>
                            </div>
                            <div className=" flex flex-col space-y-4">
                                <span className=" ">
                                        <p className=" font-bold text-base">Lining</p>
                                        <p className=" font-nomal text-sm">100% Puree</p>
                                    </span>
                                    <span className=" ">
                                        <p className=" font-bold text-base">Upper</p>
                                        <p className=" font-nomal text-sm">50% Cotton Materials</p>
                                    </span>
                                    <span className=" ">
                                        <p className=" font-bold text-base">Dims</p>
                                        <p className=" font-nomal text-sm">66" x 33" x 33"</p>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Blue;
import { Link } from "react-router-dom";
import menu from './menu.png'
const Navbar = () => {
    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    }
    return ( 
        <div>
            <div className=" z-50 px-8 py-6 bg-transparent flex flex-row justify-between items-center fixed w-full top-0">
            <span className=" md:flex flex-row items-center space-x-6 font-Labrada hidden text-[#e2dede] text-sm font-normal">
                <p className="">About</p>
                <p className="">View</p>
            </span>
            <Link to='/'>
                <p className=" font-bold text-lg text-[#e2dede] font-Tilt">Shoes.</p>
            </Link>
            <span className=" hidden md:flex flex-row items-center space-x-6 text-[#e2dede] font-Labrada text-sm font-normal">
                <p className="">Contact</p>
                <p className="">Sale</p>
            </span>
            <img src={ menu } onClick={ overlay } className=' block md:hidden z-[99999]' alt="" />
            </div>
            <div id="overlay" className=" w-full bg-[#fff] h-[500px] flex justify-center items-center -translate-y-[500px] shadow transition-all absolute z-[40]">
                <div className=" flex flex-col justify-center items-center space-y-5">
                    <p className=" font-Tilt text-base text-black font-medium">View</p>
                    <p className=" font-Tilt text-base text-black font-medium">Sale</p>
                    <p className=" font-Tilt text-base text-black font-medium">About</p>
                    <p className=" font-Tilt text-base text-black font-medium">Contact</p>
                </div>
            </div>
        </div>
        
     );
}
 
export default Navbar;
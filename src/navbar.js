const Navbar = () => {
    return ( 
        <div className=" z-50 px-8 py-6 bg-transparent flex flex-row justify-between items-center fixed w-full top-0">
            <span className=" flex flex-row items-center space-x-6 font-Labrada text-[#e2dede] text-xs font-normal">
                <p className="">About</p>
                <p className="">View</p>
            </span>
            <p className=" font-medium text-base text-[#e2dede] font-Tilt">Shoes</p>
            <span className=" flex flex-row items-center space-x-6 text-[#e2dede] font-Labrada text-xs font-normal">
                <p className="">Contact</p>
                <p className="">Sale</p>
            </span>
        </div>
     );
}
 
export default Navbar;
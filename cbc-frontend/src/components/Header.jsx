import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export function Header(){

    return(
        <div className="h-[75px] w-full flex items-center justify-center w-full bg-blue-300" >
            <div className="flex items-center justify-evenly w-[500px] text-2xl">
                <Link to="/" >Home</Link>
                <Link to="/product" >Product</Link>
                <Link to="/contact" >Contact</Link>
                <Link to="/cartpage" className="absolute bg-pink-300 w-[70px] rounded right-[5px] flex items-center justify-center text-3xl m-4 p-1 border border-pink-300 hover:bg-blue-300 hover:text-white cursor-pointer"><IoCartOutline/></Link>
            </div>
        </div>
    )
}
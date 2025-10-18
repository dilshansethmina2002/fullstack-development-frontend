import { Link } from "react-router-dom";

export function Header(){
    return(
        <div className="h-[75px] w-full flex items-center justify-center w-full bg-blue-300" >
            <div className="flex items-center justify-evenly w-[500px] text-2xl">
                <Link to="/" className=" ">Home</Link>
                <Link to="/product" >Product</Link>
                <Link to="/contact" >Contact</Link>
            </div>
        </div>
    )
}
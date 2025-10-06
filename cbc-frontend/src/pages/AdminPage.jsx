import { Link, Route, Routes } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { LuPackage } from "react-icons/lu";
export function AdminPage(){
    return(
        <div className="bg-gray-300 w-full h-screen flex flex-row p-1">
            <div className="bg-blue-500 w-[300px] h-full m-2 rounded-lg flex flex-col gap-9 p-4 justify-center">
                <Link to="/admin/user" className="flex items-center gap-2"> <FaRegUser />Users</Link>
                <Link to="/admin/products" className="flex items-center gap-2"> <MdProductionQuantityLimits />Products</Link>
                <Link to="/admin/orders" className="flex items-center gap-2"> <LuPackage />Orders</Link>
                <Link to="/admin/settings" className="flex items-center gap-2"> <CiSettings />Settings</Link>   
            </div>
            <div className="bg-white w-[calc(100vw-300px)] h-full rounded-lg m-2">
                <Routes>
                    <Route path="user" element={<h1>Users Page</h1>} />
                    <Route path="products" element={<h1>Products Page</h1>} />
                    <Route path="orders" element={<h1>Orders Page</h1>} />
                    <Route path="settings" element={<h1>Settings Page</h1>} />
                    <Route path="*" element={<h1>Welcome to Admin Panel</h1>} />
                </Routes>
            </div>
        </div>
    )
}
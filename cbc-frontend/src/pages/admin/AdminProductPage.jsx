import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductPage(){
    
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
            (response)=>{
                console.log(response.data)
                setProducts(response.data)
            }
        )
    },[])


    
    return(
        <div className="p-8 bg-white rounded-lg shadow-lg w-full h-full relative">
        <table className="w-full border-collapse">
            <thead>
                <tr className="grid grid-cols-5 text-center border-b border-gray-200 bg-gray-100 text-2xl font-semibold p-4">
                    <th>ProductId</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>LabledPrice</th>
                    <th>Stock</th>
                </tr>

            </thead>
            <tbody>
                {  products.map(
                (product,index)=>{
                    return(
                        <tr key={index} className="grid grid-cols-5 text-center border-t border-gray-200 hover:bg-gray-100 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105 text-2xl p-4">
                            <td>{product.productId}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.labledPrice}</td>
                            <td>{product.stocks}</td>
                        </tr>
                    )
                }
            )
        }
            </tbody>
        </table>
        
        <Link to={"/admin/addProduct"} className="text-white bg-gray-800 p-4 rounded-full text-2xl absolute right-8 bottom-4 hover:bg-gray-700 transition duration-300 ease-in-out hover:scale-110 cursor-pointer" >
            <FaPlus />
        </Link>
    </div>

    )
}
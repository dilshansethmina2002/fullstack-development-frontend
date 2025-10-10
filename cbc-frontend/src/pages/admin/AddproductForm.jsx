import { Link } from "react-router-dom";

export function AddproductForm(){
    return(
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-3xl font-bold rounded-lg">
            <div className="w-[500px] h-[700px] bg-gray-400 rounded-lg flex items-center justify-center shadow-lg flex-col gap-3 flex">
            {/* productId, name,altName,price,labledPrice,description,image,stock */}
                Add Product Form
                
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl " placeholder="Product ID" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Product Name" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Alt Name" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Price" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Labeled Price" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Description" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Image URL" />
                <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Stock" />
                
                <div className="flex flex-row mt-5 items-center justify-between text-xl  w-[70%] h-[70px] ">
                    <Link to="/admin/products" className="bg-red-400 p-3 rounded-lg hover:bg-red-500 w-[170px] flex items-center justify-center">Cancle</Link>
                    <button className="bg-green-400 p-3 rounded-lg hover:bg-green-500 ml-5 w-[170px] flex items-center justify-center ">Add Product</button>

                </div>
            </div>
        </div>
    )
}
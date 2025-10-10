import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { MediaUpload } from "../../../utils/mediaUpload";

export function AddproductForm(){
    const [productId,setProductId] = useState("")
    const [name,setName] = useState("")
    const [altName,setAltName] = useState("")
    const [price,setPrice] = useState("")
    const [labledPrice,setLabledPrice] = useState("")
    const [description,setDescription] = useState("")
    const [stocks,setStocks] = useState("")
    const [images,setImages] = useState([])
    const navigate = useNavigate()
    
    async function handleAddProduct(){
        const promiseArray = []
        for(let i=0;i<images.length;i++){
            const promise= MediaUpload(images[i])
            promiseArray[i] = promise
        }
        try{
        const results =await Promise.all(promiseArray)

        const product= {
            productId : productId,
            name : name,
            altName : altName.split(","),
            price : Number(price),
            labledPrice : Number(labledPrice),
            image : results,
            description : description,

            stocks : Number(stocks)
        }

        const token= localStorage.getItem("token")
        console.log(token)  

        await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product",product,
            {
                headers: {
                    "Authorization" : "Bearer "+token
                }
            }
        )
        toast.success("Product added successfully")
        navigate("/admin/products")

        }catch(error){
            console.log(error)
            toast.error("Error uploading images")
        }
    
    }
    return(
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-3xl font-bold rounded-lg">
            <div className="w-[500px] h-[700px] bg-gray-400 rounded-lg flex items-center justify-center shadow-lg flex-col gap-3 flex">
            {/* productId, name,altName,price,labledPrice,description,image,stock */}
                Add Product Form
                
                <input type="text"  
                    value={productId}
                    onChange={
                    (e)=>{
                        setProductId(e.target.value)
                    }
                    } className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl " placeholder="Product ID" />
                
                <input type="text" 
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Product Name" />
                <input type="text" 
                    value={altName}
                    onChange={(e)=>{
                        setAltName(e.target.value)
                    }}
                className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Alt Name" />
                <input type="number" 
                    
                    value={price}
                    onChange={(e)=>{
                        setPrice(e.target.value)
                    }}
                className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Price" />
                <input type="number" 
                    
                    value={labledPrice}
                    onChange={(e)=>{
                        setLabledPrice(e.target.value)
                    }}
                className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Labled Price" />

                <input type="text"  
                    value={description}
                    onChange={
                        (e)=>{
                            setDescription(e.target.value)
                        }} 

                        className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Description" />
                <input type="file"
                    onChange={(e) => {
                        setImages(e.target.files)

                    }}
                    multiple
                    className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Image"
                />
                <input type="number"    
                    value={stocks}
                    onChange={(e)=>{
                        setStocks(e.target.value)
                    }}
                className="border border-white w-[70%] h-[50px] rounded-lg text-center text-xl" placeholder="Stocks" />
                
                

                <div className="flex flex-row mt-5 items-center justify-between text-xl  w-[70%] h-[70px] ">
                    <Link to="/admin/products" className="bg-red-400 p-3 rounded-lg hover:bg-red-500 w-[170px] flex items-center justify-center">Cancle</Link>
                    <button onClick={handleAddProduct} className="bg-green-400 p-3 rounded-lg hover:bg-green-500 ml-5 w-[170px] flex items-center justify-center ">Add Product</button>

                </div>
            </div>
        </div>
    )
}
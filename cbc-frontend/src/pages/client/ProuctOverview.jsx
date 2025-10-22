import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader";
import ImageSlider from "../../components/ImageSlider";
import getCart, { addToCart } from "./cart";

export function ProductOverview(){
    const params = useParams()
    console.log(params)
    const [product ,setProduct] = useState(null)
    const [status , setStatus] = useState("loading") // loading , Loaded , Error   
    const navigate = useNavigate()
 
    if(params.id==null){
        navigate("/product")
    }

    useEffect(
        ()=>{
            if(status=="loading"){
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product/" + params.id).then(
                   (res)=>{
                        setProduct(res.data.product)
                        setStatus("loaded")
                    } 
                ).catch(
                ()=>{
                    toast.error("Product is not avalable")
                    setStatus("error")
                }
            )
            }

        },[status]
    )

    return(
        <div className="w-full h-full">
            {
                status == "loading" && <Loader/>
                
            }
            {
                status == "loaded" && 
                <div className="w-full h-full flex">
                    {/* Image Slider */}
                    <div className="w-[50%] h-full">
                        <ImageSlider images={product.images}/>
                    </div>

                    {/* Product Description */}
                    <div className="w-[50%] h-full flex p-[80px]">
                        <div className="text-center">
                            <h1 className="text-3xl  font-bold mb-[30px]">{product.name}</h1>
                            <h2 className="text-3xl text-gray-500 m-[30px]">{product.altName.join(" | ")}</h2>
                            
                            <div className="w-full">
                                {
                                    product.price<product.labledPrice ? 
                                    <>
                                        <span className="text-3xl m-[40px] ">LKR : {product.price.toFixed(2)+" "}</span>
                                        <span className="text-3xl line-through text-gray-300">LKR : {product.labledPrice.toFixed(2)}</span> 
                                    </>
                                    :
                                    <h2 className="text-3xl ">LKR : {product.price.toFixed(2)}</h2>
                                      
                                }
                            </div>
                            
                            <p className="text-xl text-gray-400 m-[20px]">{product.description}</p>
                                

                            <div>
                                <button className="bg-pink-400 rounded-lg p-3 m-2 border border-pink-600 text-white hover:bg-white hover:text-pink-600 w-[40%] cursor-pointer" onClick={
                                    ()=>{
                                        addToCart(product , 1)
                                        toast.success("Product added successfull")
                                        console.log(getCart())

                                    }
                                        
                                    
                                    }>Add To Cart</button>
                                <button className="bg-pink-400 rounded-lg p-3 m-2 border border-pink-600 text-white hover:bg-white hover:text-pink-600 w-[40%] cursor-pointer">Buy Now</button>

                            </div>


                        </div>
                        
                    </div> 
                    
                </div>
            }
            {
                status == "error" && <div></div>
            }
        </div>
    )
}
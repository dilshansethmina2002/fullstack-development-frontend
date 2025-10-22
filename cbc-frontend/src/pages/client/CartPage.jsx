import { FaRegTrashAlt } from "react-icons/fa"
import getCart, { addToCart, removeFromCart } from "./cart"
import { useEffect, useState } from "react"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"

 export default function CartPage(){
    const [cart,setCart] = useState([])
    const [cartLoaded ,setLoaded] = useState(false)

    useEffect(()=>{
        if(cartLoaded == false){
            const cart = getCart()
            setCart(cart)
            setLoaded(true)
        }
    },[cartLoaded]
)

    
    
    
    return(
        <div className="w-full h-full flex justify-center p-5 bg-pink-100">
            <div className="w-[70%] ">
                {
                    cart.map((item , index)=>{
                        return(
                            <div key={index} className="flex w-full h-[100px] bg-white shadow-2xl m-6 p-2 justify-between">
                                <img src={item.image} className="h-full aspect-square object-cover"/>
                                <div  className="w-[70%] overflow-hidden">
                                    <h1 className="text-lg font-bold p-2">{item.name}</h1>
                                    <h1 className="text-lg p-2" >{item.altName}</h1>
                                </div>

                                <div className="flex items-center justify-center p-2">
                                    <div className="flex items-center text-xl p-3">
                                        
                                        <CiCircleMinus onClick={()=>{
                                            addToCart(item,-1)
                                            setLoaded(false)
                                        }}/>
                                        <h1 className="text-md  p-2">{item.quantity}</h1>
                                        <CiCirclePlus onClick={()=>{
                                            addToCart(item , 1)
                                            setLoaded(false)
                                        }} />

                                    </div>
                                    
                                    <h1 className="text-md  p-2 text-red-700">RS.{item.price*item.quantity}</h1>
                                    <button className="cursor-pointer p-2" onClick={()=>{
                                        removeFromCart(item.productId)
                                        setLoaded(false)
                                    }}><FaRegTrashAlt /></button>
                                </div>
                                
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
    )
 }
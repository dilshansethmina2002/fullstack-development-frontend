import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../components/loader"
import { ProductCard } from "../../components/ProductCard"

export function ProductPage(){
    const [productList , setProduct] = useState()
    const [loaded , setLoaded] = useState()

    useEffect(
        ()=> {
            if(!loaded){
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product").then(
                    (res)=>{
                        setProduct(res.data)
                        setLoaded(true)    
                    }
                )        
            }


        }
    ,[loaded]
    )

    return (
        <div className="w-full h-full">

            {
                loaded ? 
                <div className="w-full h-full flex flex-wrap item-center justify-center">
                    {
                        productList.map(
                            (product,index)=>{
                                return(
                                    <ProductCard key={product.productId} product={product}></ProductCard>
                                )
                            }
                        )
                    }
                    

                </div>
                : <Loader/>
            }
            
        </div>

    )
}
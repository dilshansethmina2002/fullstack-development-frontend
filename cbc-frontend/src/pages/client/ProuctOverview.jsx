import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader";

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
                        setProduct(res.data)
                        setStatus("loaded")
                        console.log("--------------------------")
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
                status == "loaded" && <div>

                </div>
            }
            {
                status == "error" && <div></div>
            }
        </div>
    )
}
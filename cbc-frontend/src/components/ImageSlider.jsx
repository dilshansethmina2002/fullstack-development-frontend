import { useState } from "react"

export default function ImageSlider(props){
    const images = props.images
    console.log(props)

    const [image, setImage] = useState(images[0])



    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[70%] aspect-square bg-white shadow-2xl relative flex items-center justify-center">
                <img src={image} className="w-full h-full aspect-square bg-red-300 object-cover" />
                
                <div className="w-full h-[100px] absolute bottom-0 flex items-center justify-center backdrop-blur-3xl">
                    {
                        images.map(
                            (image,index)=>
                                {
                                    return(
                                        <img key={index} src={image} className="h-full p-2 cursor-pointer" onClick={()=> setImage(image)}/>
                                    )   
                                }     
                        )   
                    }
                </div>
                

            </div>
        </div>
    )
}
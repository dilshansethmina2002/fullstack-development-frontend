import { Link } from "react-router-dom"

export function ProductCard(props){
    const product = props.product

    return(
        <Link to={"/overview/"+product.productId} className=" w-[250px] h-[350px] m-4 shadow-2xl">
            <img src={product.images[0]} className="w-full h-[220px]"/>
            <div className="w-full h-[130px] flex flex-col justify-center p-3">
                <p className="text-lg font-bold"> {product.name}</p>
                <p className="text-red-500 text-lg">Rs {product.price.toFixed(2)} <span className="line-through text-gray-500">{product.price<product.labledPrice&&product.labledPrice.toFixed(2)}</span></p>
            </div>
        </Link>
    )
}
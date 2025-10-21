export default function getCart(){
    let cart = localStorage.getItem("cart")

    if(cart == null ){
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart))
        return []
    }

    cart = JSON.parse(cart)
    return cart
}

export function addToCart(product,qty){
    const cart = getCart();
    const productIndex = cart.findIndex((product)=>{product.productId == productId})
    
    if(productIndex == -1){
        cart.push(
            {
                productId : product.productId,
                name : product.name,
                altName : product.altName,
                price : product.price,
                labledPrice : product.labledPrice,
                image : product.image,
                quantity : qty
            }
        )
        
    }else{
        cart[productIndex].quantity += qty
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    return cart

}



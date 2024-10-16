function addToCart(name,brand,price,image){

    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    //Create Product Object
    const product = {
        name: name,
        brand: brand,
        price: price,
        image: image,
        quantity: 1
    };

    //Check if Product is Already Added
    //If no item satisfies the condition, const variable will return -1
    const existingProductIndex = cartItems.findIndex(item=> item.image === image);

    if(existingProductIndex > -1){
        cartItems[existingProductIndex].quantity += 1;
    }
    else{
        cartItems.push(product);
    }

    // Save the updated cart to localStorage
    sessionStorage.setItem('cartItems',JSON.stringify(cartItems));

}


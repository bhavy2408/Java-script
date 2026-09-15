const getproduct = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
}

const saveProducts = (products) => {
    localStorage.setItem("products" , JSON.stringify(products))
}

const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

const saveCart = (cart) => {
    localStorage.setItem("cart" , JSON.stringify(cart));
}
export let getproducts = () => {
    return JSON.parse(localStorage.getItem("products")) || [];
} 

export let saveProduct = (products) => {
    localStorage.setItem("product" , JSON.stringify(products));
}

let getCarts = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

let saveCarts = (cart) => {
    localStorage.setItem("carts" , JSON.stringify("cart"));
}
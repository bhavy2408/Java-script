import { getproducts , saveProduct} from "./help.js"

export function seedproducts(){
    const existing = getproducts();

    if(existing.length > 0){
        return;
    }

    fetch('https://fakestoreapi.com/products').then((response) => {
        return response.json()
    }).then((data) => {
        saveProduct(data);
    } )
}
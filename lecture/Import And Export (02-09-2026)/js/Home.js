 
// DOM Part 
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Productfrom").addEventListener("submit",AddNewProduct);
    document.getElementById("searchInput").addEventListener("input",FilterAndSort);
    filterAndSort();
})

// New Product add part
const AddNewProduct = (e) => {
    e.preventDefault();

    let name = document.getElementById("ProductName").value.trim();
    let price = document.getElementById("productPrice").value.trim();
    let category = document.getElementById("productCaregory").value;
    let image = document.getElementById("productImage").value.trim();

    const errorbox = document.getElementById("formError");
    errorbox.innerHTML = " ";

    if(name.length < 3){
        errorbox.textContent = "Product name must be atleast 3 chareacter"
        return;
    }

    if(price === "" || isNaN(price) || Number(price) <= 0){
        errorbox.textContent = "price must be a valid number greater than 0."
        return;
    }

    if(category === " "){
        errorbox.textContent = "Please select the category."
        return;
    }

    const Products = getproduct();

    const newProduct = {
        id:Date.now(),
        name:name,
        price:Number(price),
        category:category,
        image:image
    } 

    Products.push(newProduct);
    saveProducts(Products);

    e.target.reset();

    FilterAndSort();    
};  

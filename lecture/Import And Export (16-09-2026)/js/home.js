import{getproducts , saveProduct } from "./help.js"


document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("productForm")
    .addEventListener("submit", AddNewProduct);

  document
    .getElementById("searchInput")
    .addEventListener("input", FilterAndSort);

  document
    .getElementById("sortSelect")
    .addEventListener("change", FilterAndSort);
});

let AddNewProduct = (e) => {
  e.preventDefault();

  const name = document.getElementById("productName").value.trim();
  const price = document.getElementById("productPrice").value.trim();
  const category = document.getElementById("productCategory").value;
  const image = document.getElementById("productImage").value.trim();

  const errorBox = document.getElementById("formError");
  errorBox.textContent = "";

  if (name.length < 3) {
    errorBox.textContent = "Product name must be at least 3 characters.";
    return;
  }

  if (price === "" || isNaN(price) || Number(price) <= 0) {
    errorBox.textContent = "Price must be a valid number greater than 0.";
    return;
  }

  if (category === "") {
    errorBox.textContent = "Please select a category.";
    return;
  }

  const products = getproducts();

  const Newproduct = {
    name: name,
    price: Number(price),
    category: category,
    image: image,
  };

  products.push(Newproduct);
  saveProduct(products);

  e.target.reset();

  FilterAndSort();
};

let renderProduct = (list) => {
  let container = document.getElementById("ProductList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p>No product Match your search</p>`;
    return;
  }

  list.forEach((product) => {
    const card = document.createElement("div");

    card.innerHTML = `
            <div class="border rounded-lg p-4 shadow">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="w-full h-40 object-cover rounded"
                >

                <h5 class="text-xl font-semibold mt-4">
                    ${product.name}
                </h5>

                <p class="mt-2">
                    ${product.category}
                </p>

                <span class="text-2xl font-bold">
                    ₹${product.price}
                </span>

                <button>
                    Add to cart
                </button>

            </div>
        `;
    container.appendChild(card);
  });

  FilterAndSort()
};

let FilterAndSort = () => {

 let keyword = document.getElementById("searchInput").value.trim().toLowerCase();
 let sortselect = document.getElementById("sortSelect").value;

  let products = getproducts(); 

 if(keyword !== ""){
  products = products.filter((p) => p.name.toLowerCase().includes(keyword));
 }

  if(sortselect === "lowtohigh"){
    products = products.slice().sort((a, b) => a.price - b.price);
  }else if(sortselect === "hightolow"){
    products = products.slice().sort((a, b) => b.price - a.price);
  }
 
  renderProduct(products);
} 


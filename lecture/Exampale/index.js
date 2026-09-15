
// =====================================================
// PRODUCT MANAGEMENT SYSTEM
// =====================================================


// =====================================================
// DOM CONTENT LOADED
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("productForm")
        .addEventListener("submit", AddNewProduct);


    document
        .getElementById("searchInput")
        .addEventListener("input", FilterAndSort);


    document
        .getElementById("categoryFilter")
        .addEventListener("change", FilterAndSort);


    document
        .getElementById("sortSelect")
        .addEventListener("change", FilterAndSort);


    // Display products when page loads
    FilterAndSort();

});



// =====================================================
// GET PRODUCTS FROM LOCAL STORAGE
// =====================================================

const getProduct = () => {

    const products = localStorage.getItem("products");

    if (products === null) {
        return [];
    }

    return JSON.parse(products);

};



// =====================================================
// SAVE PRODUCTS TO LOCAL STORAGE
// =====================================================

const saveProducts = (products) => {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

};



// =====================================================
// ADD NEW PRODUCT
// =====================================================

const AddNewProduct = (e) => {

    // Prevent page refresh
    e.preventDefault();


    // Get input values
    const name =
        document.getElementById("productName").value.trim();


    const price =
        document.getElementById("productPrice").value.trim();


    const category =
        document.getElementById("productCategory").value;


    const image =
        document.getElementById("productImage").value.trim();


    // Error box
    const errorBox =
        document.getElementById("formError");


    errorBox.textContent = "";



    // =================================================
    // VALIDATION
    // =================================================

    if (name.length < 3) {

        errorBox.textContent =
            "Product name must be at least 3 characters.";

        return;

    }


    if (
        price === "" ||
        isNaN(price) ||
        Number(price) <= 0
    ) {

        errorBox.textContent =
            "Price must be a valid number greater than 0.";

        return;

    }


    if (category === "") {

        errorBox.textContent =
            "Please select a category.";

        return;

    }



    // =================================================
    // GET OLD PRODUCTS
    // =================================================

    const products = getProduct();



    // =================================================
    // CREATE NEW PRODUCT
    // =================================================

    const newProduct = {

        id: Date.now(),

        name: name,

        price: Number(price),

        category: category,

        image: image

    };



    // =================================================
    // ADD PRODUCT TO ARRAY
    // =================================================

    products.push(newProduct);



    // =================================================
    // SAVE PRODUCTS
    // =================================================

    saveProducts(products);



    // =================================================
    // RESET FORM
    // =================================================

    e.target.reset();



    // Remove error
    errorBox.textContent = "";



    // =================================================
    // UPDATE PRODUCT LIST
    // =================================================

    FilterAndSort();

};



// =====================================================
// FILTER + SORT
// =====================================================

const FilterAndSort = () => {


    // Get all products
    let products = getProduct();



    // =================================================
    // SEARCH
    // =================================================

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();



    if (keyword !== "") {

        products = products.filter((product) => {

            return product.name
                .toLowerCase()
                .includes(keyword);

        });

    }



    // =================================================
    // CATEGORY FILTER
    // =================================================

    const category =
        document.getElementById("categoryFilter").value;



    if (category !== "All") {

        products = products.filter((product) => {

            return product.category === category;

        });

    }



    // =================================================
    // SORT
    // =================================================

    const sort =
        document.getElementById("sortSelect").value;



    if (sort === "low") {

        products.sort((a, b) => {

            return a.price - b.price;

        });

    }


    else if (sort === "high") {

        products.sort((a, b) => {

            return b.price - a.price;

        });

    }


    else if (sort === "az") {

        products.sort((a, b) => {

            return a.name.localeCompare(b.name);

        });

    }


    else if (sort === "za") {

        products.sort((a, b) => {

            return b.name.localeCompare(a.name);

        });

    }



    // =================================================
    // DISPLAY PRODUCTS
    // =================================================

    renderProducts(products);

};



// =====================================================
// RENDER PRODUCTS
// =====================================================

const renderProducts = (list) => {


    const container =
        document.getElementById("productList");


    // Clear old cards
    container.innerHTML = "";



    // =================================================
    // PRODUCT COUNT
    // =================================================

    const productCount =
        document.getElementById("productCount");


    productCount.textContent =
        `${list.length} Product${list.length !== 1 ? "s" : ""}`;



    // =================================================
    // NO PRODUCT
    // =================================================

    if (list.length === 0) {

        container.innerHTML = `

            <div class="col-span-full text-center py-16">

                <div class="text-6xl mb-4">
                    📦
                </div>

                <h3 class="text-2xl font-bold text-gray-700">
                    No Products Found
                </h3>

                <p class="text-gray-500 mt-2">
                    Try adding a product or changing your search.
                </p>

            </div>

        `;

        return;

    }



    // =================================================
    // CREATE PRODUCT CARDS
    // =================================================

    list.forEach((product) => {


        const card =
            document.createElement("div");


        card.className =
            "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300";


        // =================================================
        // IMAGE
        // =================================================

        const image =
            product.image ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600";



        card.innerHTML = `

            <!-- Product Image -->

            <div class="h-56 bg-gray-100 overflow-hidden">

                <img
                    src="${image}"
                    alt="${product.name}"
                    class="w-full h-full object-cover hover:scale-105 transition duration-300"
                    onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600'"
                >

            </div>


            <!-- Product Information -->

            <div class="p-5">

                <!-- Category -->

                <span
                    class="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                >
                    ${product.category}
                </span>


                <!-- Product Name -->

                <h3
                    class="text-xl font-bold text-gray-800 mb-3"
                >
                    ${product.name}
                </h3>


                <!-- Rating -->

                <div class="flex items-center gap-1 mb-4">

                    <span class="text-yellow-400">
                        ★★★★★
                    </span>

                    <span class="text-gray-500 text-sm">
                        4.8
                    </span>

                </div>


                <!-- Price + Delete -->

                <div
                    class="flex items-center justify-between"
                >

                    <span
                        class="text-2xl font-bold text-gray-900"
                    >
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>


                    <button
                        type="button"
                        onclick="deleteProduct(${product.id})"
                        class="bg-red-100 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-medium transition"
                    >
                        🗑️ Delete
                    </button>

                </div>

            </div>

        `;


        // Add card to container
        container.appendChild(card);

    });

};



// =====================================================
// DELETE PRODUCT
// =====================================================

const deleteProduct = (id) => {


    const confirmDelete =
        confirm("Are you sure you want to delete this product?");


    if (!confirmDelete) {
        return;
    }



    // Get products
    let products = getProduct();



    // Remove selected product
    products = products.filter((product) => {

        return product.id !== id;

    });



    // Save updated products
    saveProducts(products);



    // Display updated list
    FilterAndSort();

};

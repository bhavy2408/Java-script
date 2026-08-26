let setData = () => {
    let user = {
        name : "bhavy",
        age : 20,
        gender : "male",
        address : {
            city : "surat",
            state : "gujarat"    
        }
    }

    let product = {
        name : "Laptop",
        warenty : 1,
        price : 23000
    }
    localStorage.setItem("users",JSON.stringify(user))
    localStorage.setItem("products",JSON.stringify(product))
}
let getData = () => {
    let data = localStorage.getItem("users")
    let user = JSON.parse(data)
    console.log(user);

    // user
    document.getElementById("demo").innerHTML = user.name 
    document.getElementById("demo").innerHTML += "<br>" + user.age
    document.getElementById("demo").innerHTML += "<br>" + user.gender
    document.getElementById("demo").innerHTML += "<br>" + user.address.city
    document.getElementById("demo").innerHTML += "<br>" + user.address.state

    // product
    let data2 = localStorage.getItem("products")
    let user2 = JSON.parse(data2)
    console.log(user2);
    
    document.getElementById("demo").innerHTML = "<br><br>" + product.name
    document.getElementById("demo").innerHTML += "<br>" + product.warenty
    document.getElementById("demo").innerHTML += "<br>" + product.price
}

let removeData = () => {
    localStorage.removeItem("users")
}

let clearData = () => {
    localStorage.clear()
}
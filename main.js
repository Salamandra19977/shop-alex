let url = "https://my-json-server.typicode.com/Salamandra19977/marketplace"
let productArray = []
let productGrid = document.getElementById("products-grid")

let cartProd = document.getElementById("cart-products")

function openCart() {
    cartProd.classList.toggle("hide")
}

fetch(url + "/products")
    .then(async function(response){
        let products = await response.json()
        products.forEach(p => {
            productArray.push(p)
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
                <img class="product-photo" src="${p.photo_url}">
                <a href="profile.html?id=${p.author_id}">Profile</a>
                <button onclick="addToCart(${p.id})">Купити</button>
            `
            productGrid.append(pElem)
        });
    })

let cart = []

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"))
    drawCartProducts()
}

function addToCart(id) {
    let product = productArray.find(function(p){
        return p.id == id
    })
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
    drawCartProducts()
}

function drawCartProducts() {
    cartProd.innerHTML = null
    sum = 0
    if (cart.length === 0) return cartProd.innerHTML = "Cart is empty"
    cart.forEach(function(p){
        if (!isNaN(p.price)) sum += +p.price
        cartProd.innerHTML += `
        <p>
            <img class="cart-photo" src="${p.photo_url}">
            | ${p.product_name} | ${p.price}
        </p>
        <hr>
     `
    })

    cartProd.innerHTML += `
        <p>Total price: ${sum} $</p>
        <button onclick="buy()">Купити все</button>
    `
}

function buy() {
    cartProd.innerHTML = "Cart is empty"
    cart = []
    localStorage.setItem("cart", "[]")
}

let url = "https://my-json-server.typicode.com/Salamandra19977/marketplace"
let productArray = []
let productGrid = document.getElementById("products-grid")

fetch(url + "/products")
    .then(async function(response){
        let products = await response.json()
        products.forEach(p => {
            let pElem = document.createElement('div')
            pElem.classList.add('product')
            pElem.innerHTML = `
                <img class="product-photo" src="${p.photo_url}">
                <a href="profile.html?id=${p.author_id}">Profile</a>
            `
            productGrid.append(pElem)
        });
    })

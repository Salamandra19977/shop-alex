const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')

console.log(products)

let url = "https://my-json-server.typicode.com/Salamandra19977/marketplace"
let profile = document.getElementById("profile")

fetch(`${url}/users/${id}`)
    .then(async function(response){
        let user = await response.json()
        console.log(user)
        profile.innerHTML = `
            <h1>${user.name}</h1>
            <img src="${user.photo_url}" alt="">
            <p>Balance: ${user.balance} $</p> 
        `
    })
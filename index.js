import { menuArray } from './data.js'

let orderHtml = ''
const mainContainer = document.getElementById("main-container")



function render() {
    let foodItemHtml = ''
    menuArray.forEach((menu) => {

        foodItemHtml += 

        `<section class="container">
            <div class="menu-div">
                <p class="food-emoji">${menu.emoji}</p>
                <div class="food-details">
                    <h3 class="food-name">${menu.name}</h3>
                    <p class="food-ingredients">${menu.ingredients}</p>
                    <h4 class="food-price">$${menu.price}</h4>
                </div>
                <div class="shop-item-btn-container">
                    <button class="shop-food-item-btn" id="${menu.id}" >+</button>
                </div>
            </div>
        </section>`
   
    })
    mainContainer.innerHTML = foodItemHtml
}

render()

document.addEventListener("click", (e) => {
    if (e.target.id === '0') {
        addItemToCart(e.target.id)
    } else if (e.target.id === '1') {
        console.log('get humberger')
    } else if (e.target.id === '2') {
        console.log('get beer')
    } else if (e.target.id === '3') {
        console.log('get Java Latte')
    }
})

function addItemToCart(objId) {
    document.getElementById("your-order-section").style.display = 'block'
    let productObject = menuArray.filter(function(menu) {
        return menu.id === Number(objId)
    })[0]

    console.log(productObject)
    
    orderHtml += 
`
    <h3 class="order-item" id="order-item">${productObject.name}</h3>
    <p class="remove-item-link" id="remove-item-link">Remove</p>
    <h3 class="order-price" id="order-price">$${productObject.price}</h3>
`
document.getElementById("order-data").innerHTML = orderHtml
}
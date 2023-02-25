import { menuArray } from './data.js'

let orderHtml = ''
let totalPrice = 0
const mainContainer = document.getElementById("main-container")
const orderDataContainer = document.getElementById("order-data-container")
const totalOrderPrice = document.getElementById("order-price-sum")
const paymentForm = document.getElementById("payment-form")



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
        addPizzaToCart(e.target.id)
    } else if (e.target.id === '1') {
        addHumbergerToCart(e.target.id)
    } else if (e.target.id === '2') {
        addBeerToCart(e.target.id)
    } else if (e.target.id === '3') {
        addJavaLatteToCart(e.target.id)
    }
})

function addPizzaToCart(objId) {
    document.getElementById("your-order-section").style.display = 'block'
    let productObject = menuArray.filter(function(menu) {
        return menu.id === Number(objId)
    })[0]

    
    orderHtml += 
`
<div class="order-data" id="order-data">
<h3 class="order-item" id="order-item">${productObject.name}</h3>
<p class="remove-item-link" id="remove-item-link">Remove</p>
<h3 class="order-price" id="order-price">$${productObject.price}</h3>        
</div>
`
orderDataContainer.innerHTML = orderHtml
totalPrice += productObject.price
totalOrderPrice.textContent = `$${totalPrice}`
}

function addHumbergerToCart(objId) {
    document.getElementById("your-order-section").style.display = 'block'
    let productObject = menuArray.filter(function(menu) {
        return menu.id === Number(objId)
    })[0]

    orderHtml += 
`
<div class="order-data" id="order-data">
<h3 class="order-item" id="order-item">${productObject.name}</h3>
<p class="remove-item-link" id="remove-item-link">Remove</p>
<h3 class="order-price" id="order-price">$${productObject.price}</h3>        
</div>
`
orderDataContainer.innerHTML = orderHtml
totalPrice += productObject.price
totalOrderPrice.textContent = `$${totalPrice}`
}

function addBeerToCart(objId) {
    document.getElementById("your-order-section").style.display = 'block'
    let productObject = menuArray.filter(function(menu) {
        return menu.id === Number(objId)
    })[0]

    orderHtml += 
`
<div class="order-data" id="order-data">
<h3 class="order-item" id="order-item">${productObject.name}</h3>
<p class="remove-item-link" id="remove-item-link">Remove</p>
<h3 class="order-price" id="order-price">$${productObject.price}</h3>        
</div>
`
orderDataContainer.innerHTML = orderHtml
totalPrice += productObject.price
totalOrderPrice.textContent = `$${totalPrice}`
}

function addJavaLatteToCart(objId) {
    document.getElementById("your-order-section").style.display = 'block'
    let productObject = menuArray.filter(function(menu) {
        return menu.id === Number(objId)
    })[0]

    orderHtml += 
`
<div class="order-data" id="order-data">
<h3 class="order-item" id="order-item">${productObject.name}</h3>
<p class="remove-item-link" id="remove-item-link">Remove</p>
<h3 class="order-price" id="order-price">$${productObject.price}</h3>        
</div>
`
orderDataContainer.innerHTML = orderHtml
totalPrice += productObject.price
totalOrderPrice.textContent = `$${totalPrice}`
}

const completeOrderBtn = document.getElementById("complete-order-btn")

completeOrderBtn.addEventListener("click", () => {
    document.getElementById("payment-container").style.display = 'block'
    document.getElementById("your-order-section").style.display = 'none'
})

paymentForm.addEventListener("submit", () => {
    document.getElementById("thank-you-container").style.display = 'block'
})

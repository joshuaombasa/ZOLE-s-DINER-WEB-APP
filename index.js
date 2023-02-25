import { menuArray } from './data.js'


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
                    <span class="shop-food-item-btn" id="${menu.id}" >+</span>
                </div>
            </div>
        </section>`
   
    })
    mainContainer.innerHTML = foodItemHtml
}

render()

document.addEventListener("click", (e) => {
    if (e.target.id === '0') {
        console.log('get pizza')
    } else if (e.target.id === '1') {
        console.log('get humberger')
    } else if (e.target.id === '2') {
        console.log('get beer')
    } else if (e.target.id === '3') {
        console.log('get Java Latte')
    }
})

function addItemToCart() {
    
}
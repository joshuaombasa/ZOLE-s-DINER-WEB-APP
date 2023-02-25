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
                    <h4 class="food-price">${menu.price}</h4>
                </div>
                <div class="shop-item-btn-container">
                    <span class="shop-food-item-btn">+</span>
                </div>
            </div>
        </section>`
   
    })
    mainContainer.innerHTML = foodItemHtml
}

render()
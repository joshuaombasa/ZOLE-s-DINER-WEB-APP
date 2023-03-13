# ZOLE-s-DINER-WEB-APP

This is a JavaScript code that creates a menu for a restaurant website, allows users to add items to their order and then proceed to payment.
The menuArray is an array of objects that contains information about the menu items, such as their name, price, and ingredients.

The render() function creates the HTML for the menu items by iterating over the menuArray and creating a section element for each item.
The event listener on the document object listens for clicks on the plus button of each menu item and then calls a corresponding function to add the item to the user's order.

Each function that adds an item to the order updates the orderHtml string and adds the HTML for the new order item to the orderDataContainer. It also updates the totalPrice variable and displays it in the totalOrderPrice element.
The completeOrderBtn event listener hides the your-order-section and displays the payment-container when the user clicks on the Complete Order button.

The paymentForm event listener listens for a form submission and gets the client's name from the submitted data. It then displays a thank you message with the client's name and hides the payment-container.

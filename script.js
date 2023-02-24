// Importing Module

// import {addToCart,totalPrize as price, tq} from "./shoppingCart.js";
// addToCart("bread", 10);
// console.log(price, totalQuantity);
// console.log(shippingCost);

// console.log("Importing Module");
// import * as ShoppingCart from './shoppingCart'
// ShoppingCart.addToCart('Pizza',2);

// import add,{addToCart,totalPrize as price, tq} from './shoppingCart.js';
// console.log(price);

import add, {cart} from './shoppingCart.js'
add('Bread',2)
add('Pizza',2)
add('Apple',2)

console.log(cart); // its a object
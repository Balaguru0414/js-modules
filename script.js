// Importing Module

/*
import {addToCart,totalPrize as price, tq} from "./shoppingCart.js";
addToCart("bread", 10);
console.log(price, totalQuantity);
console.log(shippingCost);

import './shoppingCart.js'
console.log("Importing Module");
import * as ShoppingCart from './shoppingCart'
ShoppingCart.addToCart('Pizza',2);

import add,{addToCart,totalPrize as price, tq} from './shoppingCart.js';
console.log(price);
*/
import add, {cart} from './shoppingCart.js';
add('Bread',2)
add('Pizza',5)
add('Apple',4)

console.log(cart);
/*
//////////////////////////////////////////////////////////////
// The module Pattern

console.log(cart); // its a object

console.log('Start Fetching')
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json();
console.log(data);
console.log('Something')

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();

  return {title : data.at(-1).title, text : data.at(-1).body}
}
const lastPost = getLastPost();
console.log(lastPost);

// Not very Clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost =10;
  const totalPrice = 222;
  const totalQuantity = 23;

  const addToCart = function (product,quantity) {
    cart.push({product,quantity});
    console.log(`${quantity} ${product} added to cart (shippingCost is ${shippingCost})`);
  };

  const orderStock = function (product,quantity) {
    cart.push({product,quantity});
    console.log(`${quantity} ${product} Order from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  }
})();

ShoppingCart2.addToCart('apple',4)
ShoppingCart2.addToCart('pizza',2)
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost)
 
// Export
export.addTocart = function (product,quantity) {
  cart.push({product,quantity});
  console.log(`${quantity} ${product} added to cart (shippingCost is ${shippingCost})`);
};

// Import
const {addTocart} = require('./shoppingCart.js');
*/
////////////////////////////////////////////////////////////////
// introduction to NPM
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart : [
    {product : 'Bread',quantity : 5},
    {product : 'Pizza',quantity : 5}
    ],
  user : {loggedIn : true},
}

const stateClone = Object.assign({},state);
const stateDeepClone = cloneDeep(state);
// console.log(stateClone);
// console.log(stateDeepClone);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot){
  module.hot.accept();
}













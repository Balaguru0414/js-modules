// Expoting mudule

console.log("Expoting Module");

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrize = 230;
const totalQuantity = 23;

export { totalPrize, totalQuantity as tq};

export default function (product,quantity) {
  cart.push({ product,quantity });
  console.log(`${quantity} ${product} added to cart`)
}

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'bala' },
  { value: -45, description: 'Groceries 🥑', user: 'bala' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'bala' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'bala' },
  { value: -1100, description: 'New iPhone 📱', user: 'bala' },
  { value: -20, description: 'Candy 🍭', user: 'nivedhitha' },
  { value: -125, description: 'Toys 🚂', user: 'nivedhitha' },
  { value: -1800, description: 'New Laptop 💻', user: 'bala' },
]);

const spendingLimits = Object.freeze({
  bala: 1500,
  nivedhitha: 100,
});

// spendingLimits.surya = 200;
// console.log(spendingLimits)

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;  
const getLimit = (limits,user) => limits?.[user] ?? 0;

// Pure function 
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'Bala'
  ) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
  ? [...state,{ value: -value, description, user: cleanUser}]
  : state;  
};

const newBudget1 = addExpense(budget,spendingLimits,10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'nivedhitha');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Surya');

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits,entry.user)
//     ? {...entry, flag : 'limit'}
//     : entry;
//   })
//   // for (const entry of newBudget3) 
//   //   if (entry.value < -getLimit(limits,entry.user)) entry.flag = 'limit';
// };

const checkExpenses =  (state, limits) => 
  state.map(entry => 
    entry.value < -getLimit(limits,entry.user)
    ? {...entry, flag : 'limit'}
    : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state,bigLimit) {
  const bigExpenses = state
  .filter(entry => entry.value <= -bigLimit)
  .map(entry => entry.description.slice(-2))
  .join(' / ')
  // .reduce((str,cur) => `${str} / ${cur.description.slice(-2)}`,'')
  console.log(bigExpenses)

  // let output = '';
  // for (const entry of budget)
  //   // Emojis are 2 chars
  //   output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  //   output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

// console.log(budget);

logBigExpenses(finalBudget,100);

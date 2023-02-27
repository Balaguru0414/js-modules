const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'bala' },
  { value: -45, description: 'Groceries 🥑', user: 'bala' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'bala' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'bala' },
  { value: -1100, description: 'New iPhone 📱', user: 'bala' },
  { value: -20, description: 'Candy 🍭', user: 'nivedhitha' },
  { value: -125, description: 'Toys 🚂', user: 'nivedhitha' },
  { value: -1800, description: 'New Laptop 💻', user: 'bala' },
];

const spendingLimits = {
  bala: 1500,
  nivedhitha: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'Bala') {
  user = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;  
  const limit = getLimit(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user});
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'nivedhitha');
addExpense(200, 'Stuff', 'Surya');

const checkExpenses = function () {
  for (const entry of budget) 
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget)
    // Emojis are 2 chars
    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
    output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);

logBigExpenses(500);

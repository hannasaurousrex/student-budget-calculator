// Getting relevant form input elements by ID
const weeklyIncome = document.getElementById("weekly-income");
const savingsGoal = document.getElementById("savings-goal");
const expensesBills = document.getElementById("living-expenses-rent");
const expensesRent = document.getElementById("living-expenses-bills");
const expensesGroceries = document.getElementById("living-grocery");
const uniTransport = document.getElementById("uni-expenses-transport");
const uniStationary = document.getElementById("uni-expenses-books");
const uniFood = document.getElementById("uni-expenses-other");
const personalFood = document.getElementById("personal-expenses-food");
const personalHobbies = document.getElementById("personal-expenses-hobbies");
const personalShopping = document.getElementById("personal-expenses-shopping");
const personalActivities = document.getElementById(
  "personal-expenses-activities"
);
// Getting relevant form output elements by ID
const resultNet = document.getElementById("result-net");
const resultTotal = document.getElementById("result-total");
const resultAverage = document.getElementById("result-average");
const resultRent = document.getElementById("result-rent");
const resultBills = document.getElementById("result-bills");
const resultGroceries = document.getElementById("result-groceries");
const resultLivingTotal = document.getElementById("result-living-total");
const resultTransport = document.getElementById("result-transport");
const resultStationary = document.getElementById("result-stationary");
const resultOther = document.getElementById("result-other");
const resultTotalUni = document.getElementById("result-total-uni");
const resultFood = document.getElementById("result-food");
const resultHobbies = document.getElementById("result-hobbies");
const resultShopping = document.getElementById("result-shopping");
const resultActivities = document.getElementById("result-activities");
const resultTotalPersonal = document.getElementById("result-total-personal");
const resultHeader = document.getElementById("result-header");
const onBudgetImg = document.getElementById("on-budget-result");
const notOnBudgetImg = document.getElementById("not-on-budget-result");

// Getting 'Calculate' button using a query selector
const calcButton = document.querySelector("#calc");

// Getting 'Reset' button using a query selector
const resetButton = document.getElementById("reset-btn");

// Rounding results to two decimal places
function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

// Adding an event listener for the 'Calculate button
calcButton.addEventListener("click", function (event) {
  // Prevent default action
  event.preventDefault();

  // Calculating the Living section total
  const livingTotal =
    round(expensesBills.value) +
    round(expensesRent.value) +
    round(expensesGroceries.value);
  // Calculating the Uni section total
  const uniTotal =
    round(uniTransport.value) +
    round(uniStationary.value) +
    round(uniFood.value);
  // Calculating the Personal section total
  const personalTotal =
    round(personalFood.value) +
    round(personalHobbies.value) +
    round(personalShopping.value) +
    round(personalActivities.value);
  // Calculating the Net result, total of all expenses, and average of all expenses
  const expensesTotal = round(livingTotal + uniTotal + personalTotal);
  const expensesAverage = round(expensesTotal / 10);
  const remainingFunds = round(weeklyIncome.value - expensesTotal);

  // Checking if the remaining funds is more than or equal to the savings goal, if so the user is on budget
  const onBudget = round(remainingFunds >= savingsGoal.value) ? true : false;

  // Displaying the values of the form results
  resultNet.innerText = round(remainingFunds);
  resultTotal.innerText = round(expensesTotal);
  resultAverage.innerText = round(expensesAverage);
  resultRent.innerText = round(expensesRent.value);
  resultBills.innerText = round(expensesBills.value);
  resultGroceries.innerText = round(expensesGroceries.value);
  resultLivingTotal.innerText = round(livingTotal);
  resultTransport.innerText = round(uniTransport.value);
  resultStationary.innerText = round(uniStationary.value);
  resultOther.innerText = round(uniFood.value);
  resultTotalUni.innerText = round(uniTotal);
  resultFood.innerText = round(personalFood.value);
  resultHobbies.innerText = round(personalHobbies.value);
  resultShopping.innerText = round(personalShopping.value);
  resultActivities.innerText = round(personalActivities.value);
  resultTotalPersonal.innerText = round(personalTotal);

  // Returning a statement on whether 'onBudget' is true or false
  if (onBudget) {
    resultHeader.innerText = "You're on Budget!";
    onBudgetImg.classList.remove("hide-img");
  } else {
    resultHeader.innerText = "You're not on Budget";
    notOnBudgetImg.classList.remove("hide-img");
    onBudgetImg.classList.add("hide-img");
  }
});

// Reset button to clear the form
resetButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("budget-form").reset();
  window.location = "#income";
});

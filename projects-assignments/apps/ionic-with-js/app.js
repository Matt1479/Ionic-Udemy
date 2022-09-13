const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtm = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

async function presentAlert() {
  const alert = document.createElement("ion-alert");
  alert.header = "Invalid inputs";
  alert.subHeader = "";
  alert.message = "Please enter valid reason and amount!";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  await alert.present();
}

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert();
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtm.addEventListener("click", () => {
  clear();
});

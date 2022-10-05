const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const dateButton = document.getElementById('btnDate');
const mainButton = document.getElementById('btnMain');
// const main = document.getElementsByClassName('main');
// const btnDate = document.getElementsByClassName('btnDate');

// const dummyTransactions = [
//       { id: 1, text: 'Flower', amount: -20 },
//       { id: 2, text: 'Salary', amount: 300 },
//       { id: 3, text: 'Book', amount: -10 },
//       { id: 4, text: 'Camera', amount: 150 }
//     ];

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorageTransactions !== null ? localStorageTransactions : []


function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '' ) {
        alert('Please add a text and amount')
    }
    else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value,//  here this + sign is most important otherwise it become a string
            date : date.value
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);
        updateLocalStorage();
        updateValues();

        text.value = '';
        amount.value = '';
        date.value ='';
    }

}
function generateID() {
    return Math.floor(Math.random() * 100000000);
}


function addTransactionDOM(transaction) {
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+';
  
    const item = document.createElement('li');
  
    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  
    item.innerHTML = `
      ${transaction.text} <span>${sign}${Math.abs(
      transaction.amount) 
    } &nbsp&nbsp ${transaction.date}</span> <button class="delete-btn" onclick="removeTransaction(${
      transaction.id
    })">x</button>
    `;
  
    list.appendChild(item);
  }


function updateLocalStorage(){
    localStorage.setItem("transactions" , JSON.stringify(transactions));
}

// Remove transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
  
    updateLocalStorage();
  
    init();
  }

// to call addTransactionDOM(transactions)
function init() {
    list.innerHTML = '';
  
    transactions.forEach(addTransactionDOM);
    updateValues();
  }

// this function is used to update in amount income and expense section
// Update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);
  
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  
    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
  }
init()

form.addEventListener('submit', addTransaction);


dateButton.addEventListener('click' , showdata)

mainButton.addEventListener('click' , showMainWindow);

function showMainWindow(){
    document.getElementById('mainContainer').style.display='block';
    document.getElementById('dateContainer').style.display='none'
}

function showdata(){
    document.getElementById('mainContainer').style.display='none';
    document.getElementById('dateContainer').style.display='block'
}


// addTransactionDOM(transactions)
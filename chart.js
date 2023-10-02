

const currentUser = {
  name: "guest",
  password: "abc123",
  expenses: [
    { amount: 10, title: "Lunch", category: "Eating Out" },
    { amount: 20, title: "Dinner", category: "Eating Out" },
    { amount: 30, title: "Breakfast", category: "Eating Out" },
    { amount: 50, title: "Movie Tickets", category: "Entertainment" },
    { amount: 60, title: "Concert Tickets", category: "Entertainment" },
    { amount: 70, title: "Groceries", category: "General" },
    { amount: 80, title: "Utilities", category: "General" },
    { amount: 90, title: "Internet Bill", category: "General" },
  ],
  incomes: [
    { amount: 1500, title: "Birthday Gift", category: "Gift" },
    { amount: 4500, title: "June Salary", category: "Salary" },
    { amount: 2000, title: "July Salary", category: "Salary" },
    { amount: 100, title: "Gift from Friend", category: "Gift" },
    { amount: 500, title: "Year End Bonus", category: "Bonus" },
  ],
  balance: 5000,
  categories: {
    expenses: ["Eating Out", "Entertainment", "General"],
    incomes: ["Salary", "Gift", "Bonus"]
  }
}

const ctx = document.getElementById('myChart');
const config = {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
}

new Chart(ctx, config)

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  // type: 'bar',
  type: 'doughnut',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: ['Eating Out', 'Entertainment', 'General',],
    datasets: [{
      label: 'Amount Spent',
      data: [100, 200, 300],
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
});

// new Chart(ctx, config)
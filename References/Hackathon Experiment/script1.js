const ctx = document.getElementById('myChart').getContext('2d');

const config = {
    type: 'line',
    data,
    options: {
        plugin: {
            legends: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

new Chart(ctx, {
    config,
    data: {
        labels: ['1 Jan 2024', '2 Jan 2024', '3 Jan 2024', '4 Jan 2024', '5 Jan 2024', '6 Jan 2024'],
        datasets: [{
            label: 'Score',
            data: [23, 0, 5, 5, 2, 3],
            borderWidth: 1,
            fill: true,
            tension: 0.4,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
    }
}, config);

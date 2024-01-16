var arr = []

function pushToArr(value) {
    arr.push(value);
    myChart.update(); // Update the chart when the array is modified
}

const data = {
    // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'moon'],
    labels: arr,
    datasets: [{
        label: 'Calories',
        fill: true,
        data: arr,
        // backgroundColor: [
        //     'rgba(255, 26, 104, 0.2)',
        //     'rgba(54, 162, 235, 0.2)',
        //     'rgba(255, 206, 86, 0.2)',
        //     'rgba(75, 192, 192, 0.2)',
        //     'rgba(153, 102, 255, 0.2)',
        //     'rgba(255, 159, 64, 0.2)',
        //     'rgba(0, 0, 0, 0.2)'
        // ],
        // borderColor: [
        //     'rgba(255, 26, 104, 1)',
        //     'rgba(54, 162, 235, 1)',
        //     'rgba(255, 206, 86, 1)',
        //     'rgba(75, 192, 192, 1)',
        //     'rgba(153, 102, 255, 1)',
        //     'rgba(255, 159, 64, 1)',
        //     'rgba(0, 0, 0, 1)'
        // ],

        borderWidth: 1,
        tension: 0.4,
    }]
};

// config 
const config = {
    type: 'line',
    data,
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {

            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

// Instantly assign Chart.js version
// const chartVersion = document.getElementById('chartVersion');

var form = document.getElementById('forms');
var form1 = document.getElementById('forms1');
var form2 = document.getElementById('forms2');
var form3 = document.getElementById('forms3');
var form4 = document.getElementById('forms4');
var form5 = document.getElementById('forms5');

var submitButton = document.getElementById('submit');
var progress = 0;
var values = [];

submitButton.onclick = function () {
    progress = 0;
    var checkboxes = form.querySelectorAll('input[name="items"]'); // Change 'form' instead of 'document'
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            // alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
        // arr.push(progress);
        // data.datasets[0].data = arr;
        // myChart.update();
    }
    var checkboxes = form1.querySelectorAll('input[name="items1"]'); // Change 'form' instead of 'document'
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            // alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
        // arr.push(progress);
        // data.datasets[0].data = arr;
        // myChart.update();
    }
    var checkboxes = form2.querySelectorAll('input[name="items2"]'); // Change 'form' instead of 'document'
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            // alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
        // arr.push(progress);
        // data.datasets[0].data = arr;
        // myChart.update();
    }
    var checkboxes = form3.querySelectorAll('input[name="items3"]'); // Change 'form' instead of 'document'
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            // alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
        // arr.push(progress);
        // data.datasets[0].data = arr;
        // myChart.update();
    }
    var checkboxes = form4.querySelectorAll('input[name="items4"]'); // Change 'form' instead of 'document'
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            // alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
        // arr.push(progress);
        // data.datasets[0].data = arr;
        // myChart.update();
    }
    var checkboxes = form5.querySelectorAll('input[name="items5"]'); // Change 'form' instead of 'document'
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            // alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
    }
    arr.push(progress);
    data.datasets[0].data = arr;
    myChart.update();
};

document.getElementById('CheckAll').onclick = function (e) {
    e.preventDefault();
    var checkboxes = document.getElementsByName('items');
    var checkboxes1 = document.getElementsByName('items1');
    var checkboxes2 = document.getElementsByName('items2');
    var checkboxes3 = document.getElementsByName('items3');
    var checkboxes4 = document.getElementsByName('items4');
    var checkboxes5 = document.getElementsByName('items5');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        checkboxes1[i].checked = true;
        checkboxes2[i].checked = true;
        checkboxes3[i].checked = true;
        checkboxes4[i].checked = true;
        checkboxes5[i].checked = true;
    }
};

document.getElementById('UncheckAll').onclick = function (e) {
    e.preventDefault();
    var checkboxes = document.getElementsByName('items');
    var checkboxes1 = document.getElementsByName('items1');
    var checkboxes2 = document.getElementsByName('items2');
    var checkboxes3 = document.getElementsByName('items3');
    var checkboxes4 = document.getElementsByName('items4');
    var checkboxes5 = document.getElementsByName('items5');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        checkboxes1[i].checked = false;
        checkboxes2[i].checked = false;
        checkboxes3[i].checked = false;
        checkboxes4[i].checked = false;
        checkboxes5[i].checked = false;
    }
};

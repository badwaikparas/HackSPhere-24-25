import { pushToArr, arr, chartVersion, myChart } from './chart.js';
var form = document.getElementById('forms');
var submitButton = document.getElementById('submit');
var progress = 0;
var values = [];

submitButton.onclick = function () {
    var checkboxes = form.querySelectorAll('input[name="items"]'); // Change 'form' instead of 'document'
    progress = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) { // Use checkboxes[i].checked
            progress += Number(checkboxes[i].value);
            pushToArr(progress);
            // Push a new label to the labels array
            // data.labels.push('NewLabel');

            // Update the chart
            // myChart.update();

            alert(progress);
            // values.push(checkboxes[i].value); // Store the checked value in the array
        }
    }
};

document.getElementById('CheckAll').onclick = function (e) {
    e.preventDefault();
    var checkboxes = document.getElementsByName('items');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
};
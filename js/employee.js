
// salary event
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});

function save() {
    let name = document.getElementById('name').value;
    let gender = document.getElementsByName('gender').value;
    let department = document.getElementById('city').value;
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let salary = document.getElementById('salary').value;
    let notes = document.getElementById('notes').value;

    alert(name);
  
}
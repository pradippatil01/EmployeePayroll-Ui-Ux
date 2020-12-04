/*
// salary event
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
*/
function submit() {
    let name = document.getElementById('name').value;
    alert(name);
}

function cancel() {

}

function reset() {

}

function validate() {
    const text = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    }
    else {
        textError.textContent = "Name is incorrect";
    }
}

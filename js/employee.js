
function submit() {
    let name = document.getElementById('name').value;
    alert(name);
}

function cancel() {

}

function reset() {

}

function validate() {
    let name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(name.value)) {
        textError.textContent = "";
    }
    else if (name.value.length == 0) {
        textError.textContent = "";
    }
    else {
        textError.textContent = "Name is incorrect";
    }
}
